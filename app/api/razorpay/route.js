import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { nanoid } from 'nanoid'

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET,
  });


export async function GET() {

    const payment_capture = 1;
    const amount = 100 * 100 // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
        amount: (amount).toString(),
        currency,
        receipt: nanoid(),
        payment_capture,
        notes: {
            // These notes will be added to your transaction. So you can search it within their dashboard.
            // Also, it's included in webhooks as well. So you can automate it.
            paymentFor: "testingDemo",
            userId: "100",
            productId: 'P100'
        }
    };

   const order = await instance.orders.create(options);
  return NextResponse.json({ msg: "success",order });
}


export async function POST(req) {
  const body = await req.json();


  return NextResponse.json({ msg: body });
}