import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request) {
  try {
    const { full_name, email, password, specialization, fees, timing } = await request.json();
    const userResult = await query(
      "INSERT INTO users (full_name, email, password, role) VALUES (?, ?, ?, 'doctor')",
      [full_name, email, password]
    );
    await query(
      "INSERT INTO doctors (user_id, specialization, fees, timing) VALUES (?, ?, ?, ?)",
      [userResult.insertId, specialization, fees, timing]
    );
    return NextResponse.json({ success: true, message: "Doctor added successfully!" });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
