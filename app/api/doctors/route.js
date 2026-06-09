import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const results = await query(
      `SELECT d.doc_id, u.full_name as doc_name, d.specialization, d.fees, d.timing 
       FROM doctors d JOIN users u ON d.user_id = u.id`
    );
    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
