import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { generateWeeklyIntelligenceReport } from '@/lib/intelligence/weekly-report-generator';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const report = generateWeeklyIntelligenceReport();
  return NextResponse.json(report);
}

