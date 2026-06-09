import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function PUT(request) {
  try {
    const { app_id, status } = await request.json();
    await query("UPDATE appointments SET status = ? WHERE app_id = ?", [status, app_id]);
    return NextResponse.json({ success: true, message: `Appointment ${status} successfully` });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
