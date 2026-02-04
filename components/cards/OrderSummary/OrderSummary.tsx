import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, PlayCircle, Star, Users } from "lucide-react";

const OrderSummary = () => {
  return (
    <Card className="max-w-md mx-auto border-slate-100">
      <CardHeader className="gap-0">
        <CardTitle className="text-2xl font-bold text-slate-900">
          Order Summary
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Course Info Section */}
        <div className="flex gap-4">
          <Image
            width={200}
            height={200}
            src="/images/courses/course-1.jpg"
            alt="Course"
            className="w-24 h-24 rounded-xl object-cover"
            placeholder="blur"
            blurDataURL="/images/courses/course-1.jpg"
          />
          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-tight text-slate-900">
              Advanced UI Design Patterns
            </h3>
            <p className="text-slate-500 text-sm">David Lee</p>
            <div className="flex items-center gap-1 text-sm font-bold">
              <Star
                size={20}
                className="text-yellow-400 fill-yellow-400"
              />{" "}
              4.9
            </div>
          </div>
        </div>

        <Separator className="bg-slate-100" />

        {/* Stats Section */}
        <div className="space-y-3 text-slate-500 text-sm">
          <div className="flex items-center gap-3">
            <PlayCircle className="w-5 h-5" />
            <span>42 hours of content</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5" />
            <span>125,000 students enrolled</span>
          </div>
        </div>

        <Separator className="bg-slate-100" />

        {/* Pricing Section */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-slate-500">
            <span>Original Price</span>
            <span>$199.99</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className="text-slate-500">Discount</span>
            <span className="text-emerald-500">-55%</span>
          </div>
        </div>

        {/* Total Section */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-2xl text-slate-900">Total</span>
          <span className="text-2xl font-black text-slate-900">$19.00</span>
        </div>

        {/* Guarantee Box */}
        <div className="alert-box">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          <div className="space-y-1">
            <h4 className="alert-title">30-Day Money-Back Guarantee</h4>
            <p className="alert-description">
              Full refund if you're not satisfied, no questions asked.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
