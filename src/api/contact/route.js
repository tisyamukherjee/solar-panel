// app/api/contact/route.js
export async function POST(request) {
  const data = await request.json();
  console.log("Received data:", data);

  // Replace with actual email/SMTP logic or database storage
  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
