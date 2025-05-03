"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { reviewSchema, zReviewSchema } from "../../../schema/review-schema";
import { cn } from "@/utils/utils";
import { addReview } from "../../../server/actions/add-review";

// export to reviews.tsx  --------------------------------------

export default function ReviewsForm() {
  const params = useSearchParams();
  const kontenID = Number(params.get("kontenID"));

  const form = useForm<zReviewSchema>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      kontenID,
    },
  });

  const { execute, status } = useAction(addReview, {
    onSuccess(data) {
      if (data.data?.error) {
        toast.error("error");
      }

      if (data.data?.success) {
        toast.success("Review Added 👌");
        form.reset();
      }
    },
  });

  function onSubmit(values: zReviewSchema) {
    console.log("adding the review");
    execute({
      comment: values.comment,
      rating: values.rating,
      kontenID,
    });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full">
          <Button className="font-medium w-full" variant={"secondary"}>
            Leave a review
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* comment description -------------------------------------------------------- */}

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leave your review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How would you describe this destinations ?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* comment give rating -------------------------------------------------------- */}

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leave your Rating</FormLabel>
                  <FormControl>
                    <Input type="hidden" placeholder="Star Rating" {...field} />
                  </FormControl>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((value) => {
                      return (
                        <motion.div
                          className="relative cursor-pointer"
                          whileTap={{ scale: 0.8 }}
                          whileHover={{ scale: 1.2 }}
                          key={value}
                        >
                          <Star
                            key={value}
                            onClick={() => {
                              form.setValue("rating", value, {
                                shouldValidate: true,
                              });
                            }}
                            className={cn(
                              "text-primary bg-transparent transition-all duration-300 ease-in-out",
                              form.getValues("rating") >= value
                                ? "fill-primary"
                                : "fill-muted"
                            )}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </FormItem>
              )}
            />
            <Button
              disabled={status === "executing"}
              className="w-full"
              type="submit"
            >
              {status === "executing" ? "Adding Review..." : "Add Review"}
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
