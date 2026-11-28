import { NextResponse } from 'next/server';
import { assertAdminApi } from '@/lib/api-security';
import { getRankingDefenceAlerts, updateDefenceAlertStatus } from '@/lib/intelligence/ranking-defence-service';

export async function GET(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  const alerts = getRankingDefenceAlerts();
  return NextResponse.json({
    totalAlerts: alerts.length,
    criticalCount: alerts.filter(a => a.severity === 'CRITICAL').length,
    highCount: alerts.filter(a => a.severity === 'HIGH').length,
    activeCount: alerts.filter(a => a.status === 'ACTIVE').length,
    alerts
  });
}

export async function POST(req: Request) {
  const auth = await assertAdminApi(req);
  if (!auth.authorized) {
    return auth.response;
  }

  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    const updated = updateDefenceAlertStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, alert: updated });
  } catch {
    return NextResponse.json({ error: 'Failed to update alert status' }, { status: 500 });
  }
}

