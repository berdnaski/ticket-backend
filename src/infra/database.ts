import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect('mongodb+srv://ticket_db:ticketpass@cluster0.6rbc4.mongodb.net/tickets_db');
    console.log('Connect database success');
  } catch (error) {
    console.error(`file: database.ts:5 ~ connect ~ error'`, error);
    process.exit(1);
  }
}