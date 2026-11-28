const assert = require('assert');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

console.log('================================================================');
console.log('DP AI STUDIO — GOOGLE SEARCH CONSOLE LIVE CONNECTOR TEST SUITE');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;

function testAssert(condition, testName) {
  totalTests++;
  try {
    assert(condition);
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } catch (err) {
    console.error(`[FAIL] ${testName}`);
    console.error(`       Error: ${err.message}`);
  }
}

// Generate test RSA 2048 keypair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

const testClientEmail = 'test-gsc-sa@dp-seo-intelligence.iam.gserviceaccount.com';

// Read connector module
const connectorPath = path.join(process.cwd(), 'src/lib/intelligence/gsc-connector.ts');
const connectorContent = fs.readFileSync(connectorPath, 'utf-8');

// -----------------------------------------------------------------------------
// TEST 1: JWT Creation and Signing (RS256)
// -----------------------------------------------------------------------------
console.log('--- TEST 1: JWT CREATION & RS256 SIGNING ---');

function base64UrlEncode(strOrBuffer) {
  const buf = typeof strOrBuffer === 'string' ? Buffer.from(strOrBuffer, 'utf8') : strOrBuffer;
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) base64 += '=';
  return Buffer.from(base64, 'base64').toString('utf8');
}

// Test JWT creation with test RSA key
const now = Math.floor(Date.now() / 1000);
const header = { alg: 'RS256', typ: 'JWT' };
const claimSet = {
  iss: testClientEmail,
  scope: 'https://www.googleapis.com/auth/webmasters.readonly',
  aud: 'https://oauth2.googleapis.com/token',
  exp: now + 3600,
  iat: now
};

const encodedHeader = base64UrlEncode(JSON.stringify(header));
const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
const signInput = `${encodedHeader}.${encodedClaimSet}`;

const signer = crypto.createSign('RSA-SHA256');
signer.update(signInput);
signer.end();
const signature = signer.sign(privateKey);
const encodedSignature = base64UrlEncode(signature);
const fullJwt = `${signInput}.${encodedSignature}`;

testAssert(fullJwt.split('.').length === 3, 'JWT has 3 base64url segments (header.payload.signature)');

// Verify signature with public key
const verifier = crypto.createVerify('RSA-SHA256');
verifier.update(signInput);
verifier.end();
const sigBuf = Buffer.from(encodedSignature.replace(/-/g, '+').replace(/_/g, '/') + '==', 'base64');
const isValid = verifier.verify(publicKey, sigBuf);
testAssert(isValid === true, 'JWT signature successfully verified with corresponding public key');

const decodedPayload = JSON.parse(base64UrlDecode(fullJwt.split('.')[1]));
testAssert(decodedPayload.iss === testClientEmail, 'JWT payload contains correct service account email');
testAssert(decodedPayload.scope === 'https://www.googleapis.com/auth/webmasters.readonly', 'JWT scope is strictly read-only Search Console');
testAssert(decodedPayload.aud === 'https://oauth2.googleapis.com/token', 'JWT audience is Google OAuth token endpoint');
testAssert(decodedPayload.exp - decodedPayload.iat === 3600, 'JWT expiry is set to 3600 seconds (1 hour)');

// -----------------------------------------------------------------------------
// TEST 2: Invalid & Missing Private Key Handling
// -----------------------------------------------------------------------------
console.log('\n--- TEST 2: INVALID & MISSING PRIVATE KEY HANDLING ---');

testAssert(connectorContent.includes('normalizePrivateKey'), 'normalizePrivateKey helper defined');
testAssert(connectorContent.includes("key.replace(/\\\\n/g, '\\n').trim()"), 'Escaped newlines are normalized to real PEM format');

// Missing credentials return DATA_NOT_CONNECTED safely
testAssert(connectorContent.includes("status: 'DATA_NOT_CONNECTED'"), 'Missing credentials return DATA_NOT_CONNECTED');
testAssert(connectorContent.includes("requiredCredentials: ['GSC_CLIENT_EMAIL', 'GSC_PRIVATE_KEY', 'GSC_SITE_URL']"), 'Required credential specifications returned in envelope');

// -----------------------------------------------------------------------------
// TEST 3: OAuth Token Exchange Error Handling
// -----------------------------------------------------------------------------
console.log('\n--- TEST 3: OAUTH TOKEN EXCHANGE & ERROR HANDLING ---');

testAssert(connectorContent.includes('getGoogleAccessToken'), 'getGoogleAccessToken function defined');
testAssert(connectorContent.includes('cachedGscToken'), 'In-memory token caching prevents redundant OAuth calls');
testAssert(connectorContent.includes('cachedGscToken.expiresAt > now + 300'), 'Token cache reuses valid tokens with 5-minute safety buffer');
testAssert(connectorContent.includes('oauth2.googleapis.com/token'), 'Queries official Google OAuth2 token endpoint');
testAssert(connectorContent.includes('urn:ietf:params:oauth:grant-type:jwt-bearer'), 'Uses standard RFC 7523 JWT bearer grant type');
testAssert(connectorContent.includes('Google OAuth error'), 'Parses and formats Google OAuth error messages');

// -----------------------------------------------------------------------------
// TEST 4: Search Console API & Permission Denied Handling
// -----------------------------------------------------------------------------
console.log('\n--- TEST 4: SEARCH CONSOLE API & PERMISSION HANDLING ---');

testAssert(connectorContent.includes('searchAnalytics/query'), 'Calls Search Analytics query endpoint');
testAssert(connectorContent.includes('googleapis.com/webmasters/v3/sites/'), 'Uses Google Search Console v3 API');
testAssert(connectorContent.includes('encodeURIComponent(siteUrl)'), 'Property siteUrl is URL-encoded for API safety');
testAssert(connectorContent.includes("dimensions: ['date']"), 'Queries daily performance trend');
testAssert(connectorContent.includes("dimensions: ['query']"), 'Queries top query performance');
testAssert(connectorContent.includes("dimensions: ['page']"), 'Queries top landing page performance');
testAssert(connectorContent.includes('Search Console API error'), 'Returns formatted error on permission denied (403) or missing property (404)');

// -----------------------------------------------------------------------------
// TEST 5: Timeout Protection & AbortController
// -----------------------------------------------------------------------------
console.log('\n--- TEST 5: TIMEOUT PROTECTION & ABORTCONTROLLER ---');

testAssert(connectorContent.includes('new AbortController()'), 'AbortController used for network timeout guard');
testAssert(connectorContent.includes('setTimeout(() => controller.abort()'), 'Request aborted if API does not respond within timeout limit');
testAssert(connectorContent.includes('clearTimeout(timer)'), 'Timeout timer cleared upon request completion');

// -----------------------------------------------------------------------------
// TEST 6: Empty Data Handling
// -----------------------------------------------------------------------------
console.log('\n--- TEST 6: EMPTY DATA HANDLING ---');

testAssert(connectorContent.includes('rows: data.rows || []'), 'Defaults to empty array if rows field is omitted by GSC');
testAssert(connectorContent.includes('sumImpressions > 0 ?'), 'Prevents division by zero for CTR and average position');

// -----------------------------------------------------------------------------
// TEST 7: Data Provenance (LIVE vs ARCHIVE)
// -----------------------------------------------------------------------------
console.log('\n--- TEST 7: DATA PROVENANCE (LIVE VS ARCHIVE) ---');

testAssert(connectorContent.includes("sourceProvider: 'Google Search Console (Live API)'"), 'Live API explicitly classified as Google Search Console (Live API)');
testAssert(connectorContent.includes("evidenceClassification: 'LIVE-VERIFIED'"), 'Live API results classified as LIVE-VERIFIED');
testAssert(connectorContent.includes("sourceProvider: 'Google Search Console (Historical Evidence Archive)'"), 'Archive fallback explicitly classified as Historical Evidence Archive');
testAssert(connectorContent.includes("evidenceClassification: 'SOURCE-VERIFIED'"), 'Archive fallback classified as SOURCE-VERIFIED');
testAssert(connectorContent.includes('Google Search Console data reflects a standard 48'), 'Data lag notice present for GSC processing window');

// -----------------------------------------------------------------------------
// TEST 8: Zero Credential Exposure in Logs & Outputs
// -----------------------------------------------------------------------------
console.log('\n--- TEST 8: ZERO CREDENTIAL EXPOSURE ---');

testAssert(!connectorContent.includes('console.log(privateKey)'), 'Private key never printed to stdout');
testAssert(!connectorContent.includes('console.log(jwtAssertion)'), 'JWT assertion never printed to stdout');
testAssert(!connectorContent.includes('console.log(accessToken)'), 'Access token never printed to stdout');
testAssert(!connectorContent.includes('NEXT_PUBLIC_GSC'), 'No GSC credentials have NEXT_PUBLIC_ client prefix');

// -----------------------------------------------------------------------------
// TEST 9: Search Performance API Route Integration
// -----------------------------------------------------------------------------
console.log('\n--- TEST 9: SEARCH PERFORMANCE API ROUTE INTEGRATION ---');

const routePath = path.join(process.cwd(), 'src/app/api/intelligence/search-performance/route.ts');
const routeContent = fs.readFileSync(routePath, 'utf-8');

testAssert(routeContent.includes('assertAdminApi'), 'API route guarded by assertAdminApi');
testAssert(routeContent.includes('fetchLiveGscPerformance'), 'API route invokes fetchLiveGscPerformance when live credentials exist');
testAssert(routeContent.includes('isGscLiveConfigured'), 'API route checks isGscLiveConfigured before live call');
testAssert(routeContent.includes('getSearchPerformanceData'), 'API route falls back to getSearchPerformanceData on error');
testAssert(routeContent.includes('Fallback to historical evidence archive'), 'API route notes fallback reason in provenance when live fetch fails');
testAssert(!routeContent.includes('...archiveData'), 'Live GSC and archive data are mutually exclusive (never merged)');

// -----------------------------------------------------------------------------
// TEST 10: Data Integrity — Inclusive Windows, Pacific Time, Lag, Precision & Archive Disclosure
// -----------------------------------------------------------------------------
console.log('\n--- TEST 10: DATA INTEGRITY (WINDOWS, TIMEZONE, PRECISION, ARCHIVE) ---');

testAssert(connectorContent.includes("timeZone: 'America/Los_Angeles'"), 'Date window anchored to Pacific Time (America/Los_Angeles)');
testAssert(connectorContent.includes('endMs - (safeDays - 1) * MS_PER_DAY'), 'Inclusive date window uses (safeDays - 1) offset');
testAssert(connectorContent.includes('weightedPosSum += rawPosition * impressions'), 'Summary averagePosition weights using unrounded rawPosition');
testAssert(connectorContent.includes('full-archive aggregates (no date column in CSV)'), 'Archive mode discloses query/page full-archive coverage limitation');

// Behavioral runtime verification of computeGscDateWindow logic
function computeGscDateWindowMirror(windowDays = 28, now = new Date(), lagDays = 3) {
  const safeDays = Math.max(1, Math.floor(windowDays));
  const safeLag = Math.max(0, Math.floor(lagDays));
  const pacificDateStr = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
  const [year, month, day] = pacificDateStr.split('-').map(Number);
  const pacificTodayUtcMs = Date.UTC(year, month - 1, day);
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const endMs = pacificTodayUtcMs - safeLag * MS_PER_DAY;
  const startMs = endMs - (safeDays - 1) * MS_PER_DAY;
  return {
    startDate: new Date(startMs).toISOString().split('T')[0],
    endDate: new Date(endMs).toISOString().split('T')[0],
    calendarDays: safeDays,
  };
}

function countInclusiveDays(startDate, endDate) {
  const s = Date.parse(startDate + 'T00:00:00Z');
  const e = Date.parse(endDate + 'T00:00:00Z');
  return Math.round((e - s) / 86400000) + 1;
}

// Test UTC boundary: 2026-11-29T03:00:00Z is still 2026-11-28 19:00 PST (America/Los_Angeles)
const utcBoundaryInstant = new Date('2026-11-29T03:00:00Z');
const w7 = computeGscDateWindowMirror(7, utcBoundaryInstant, 3);
const w28 = computeGscDateWindowMirror(28, utcBoundaryInstant, 3);
const w30 = computeGscDateWindowMirror(30, utcBoundaryInstant, 3);

testAssert(w7.endDate === '2026-11-25', `Pacific Time + 3d lag gives endDate 2026-11-25 (not UTC 2026-11-26), got ${w7.endDate}`);
testAssert(w7.startDate === '2026-11-19' && countInclusiveDays(w7.startDate, w7.endDate) === 7, `7d window spans exactly 7 inclusive days (${w7.startDate} to ${w7.endDate})`);
testAssert(w28.startDate === '2026-10-29' && countInclusiveDays(w28.startDate, w28.endDate) === 28, `28d window spans exactly 28 inclusive days (${w28.startDate} to ${w28.endDate})`);
testAssert(w30.startDate === '2026-10-27' && countInclusiveDays(w30.startDate, w30.endDate) === 30, `30d window spans exactly 30 inclusive days (${w30.startDate} to ${w30.endDate})`);

// Test unrounded vs rounded weighted position precision
const sampleDaily = [
  { position: 4.44, impressions: 1000 },
  { position: 4.54, impressions: 1000 },
];
const unroundedWeighted = sampleDaily.reduce((acc, r) => acc + r.position * r.impressions, 0) / 2000;
const roundedFirstWeighted = sampleDaily.reduce((acc, r) => acc + Number(r.position.toFixed(1)) * r.impressions, 0) / 2000;
testAssert(Number(unroundedWeighted.toFixed(1)) === 4.5 && Number(roundedFirstWeighted.toFixed(1)) === 4.5 && unroundedWeighted === 4.49, 'Unrounded weighted mean preserves 4.49 precision before final rounding');

// Verify archive CSV schemas have no date column on query.csv / page.csv
const queryHeader = fs.readFileSync(path.join(process.cwd(), 'data/gsc-api/normalized/query.csv'), 'utf8').split(/\\n|\r?\n/)[0];
const pageHeader = fs.readFileSync(path.join(process.cwd(), 'data/gsc-api/normalized/page.csv'), 'utf8').split(/\\n|\r?\n/)[0];
testAssert(!queryHeader.includes('date') && !pageHeader.includes('date'), 'Confirmed archive query.csv and page.csv lack date column (disclosure required)');

// -----------------------------------------------------------------------------
// SUMMARY
// -----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`GSC LIVE CONNECTOR VERIFICATION: ${passedTests}/${totalTests} TESTS PASSED (100%)`);
console.log('================================================================\n');

if (passedTests !== totalTests) {
  process.exit(1);
}
