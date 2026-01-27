import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Feedback } from "@/typescript/types";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Args {
  feedback: Feedback;
}

const FeedbackCard = ({ feedback }: Args) => {
  return (
    <Card className="bg-transparent border-2 border-dashed text-white h-full cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Star
            size={16}
            color="orange"
            fill="orange"
          />
          <Star
            size={16}
            color="orange"
            fill="orange"
          />
          <Star
            size={16}
            color="orange"
            fill="orange"
          />
          <Star
            size={16}
            color="orange"
            fill="orange"
          />
          <Star
            size={16}
            color="orange"
            fill="orange"
          />
        </div>
      </CardHeader>
      <CardContent>
        <p>{feedback.review}</p>
      </CardContent>
      <CardFooter>
        <figure className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarImage
              src={feedback.image}
              alt={feedback.name}
            />
            <AvatarFallback>
              {feedback.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <figcaption>
            <h5 className="text-lg font-bold">{feedback.name}</h5>
            <p className="text-base text-orange-400 tracking-wide">
              {feedback.role}
            </p>
          </figcaption>
        </figure>
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
