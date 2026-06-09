import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const results = await query(
      "SELECT id, full_name, role FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );
    if (results.length > 0) {
      return NextResponse.json({ success: true, user: results[0] });
    } else {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
