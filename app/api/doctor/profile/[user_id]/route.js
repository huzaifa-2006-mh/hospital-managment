import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { user_id } = await params;
    const result = await query(
      "SELECT doc_id, specialization, fees, timing FROM doctors WHERE user_id = ?",
      [user_id]
    );
    if (result.length === 0) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }
    return NextResponse.json(result[0]);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
