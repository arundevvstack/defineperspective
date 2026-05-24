import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract params
    const title = searchParams.get('title') || 'Cinematic AI Commercial Production';
    const industry = searchParams.get('industry') || 'Premium Production';
    const geo = searchParams.get('geo') || 'Global';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'linear-gradient(135deg, rgba(10,10,10,1) 0%, rgba(20,20,20,1) 50%, rgba(5,5,5,1) 100%)',
            padding: '80px',
            fontFamily: 'system-ui, "Inter", sans-serif',
          }}
        >
          {/* Subtle Graphic Element */}
          <div
            style={{
              position: 'absolute',
              top: '-150px',
              right: '-150px',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(235,160,50,0.15) 0%, rgba(0,0,0,0) 70%)',
              borderRadius: '50%',
            }}
          />

          {/* Header Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                padding: '12px 24px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                color: '#fff',
                fontSize: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
              }}
            >
              {industry}
            </div>
            <div
              style={{
                display: 'flex',
                padding: '12px 24px',
                background: 'rgba(235,160,50,0.1)',
                border: '1px solid rgba(235,160,50,0.2)',
                borderRadius: '100px',
                color: '#EBA032',
                fontSize: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
              }}
            >
              {geo}
            </div>
          </div>

          {/* Core Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              marginTop: 'auto',
              marginBottom: 'auto',
              maxWidth: '950px',
            }}
          >
            <h1
              style={{
                fontSize: '90px',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              {title}
            </h1>
          </div>

          {/* Footer Branding */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#a1a1aa', fontSize: '24px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Define Perspective
              </span>
              <span style={{ color: '#EBA032', fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>
                DP AI Studios
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', color: '#fff', fontSize: '28px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Cinematic Case Study
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
