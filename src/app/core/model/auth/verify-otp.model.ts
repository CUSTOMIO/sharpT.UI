export class VerifyOtp {
  email: string;
  otp: number;

  constructor(item: VerifyOtp) {
    Object.assign(this, item)
  }
}
