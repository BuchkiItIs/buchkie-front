"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  entry: z.string().min(10, {
    message:
      "Come on, you can do better than this. Write at least 10 characters!",
  }),
});

export function NewEntryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entry: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Submitting journal entry to the blockchain...", values);
  };

  return (
    <div className="p-2 sm:p-8">
      {/* Text Box Area */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="entry"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="p-2 sm:p-6 rounded-md border-2 mb-6 border-primary shadow-md shadow-primary">
                    <Textarea
                      {...field}
                      placeholder="What's on your mind today? Your thoughts will immutably saved on the blockchain..."
                      className="w-full h-64 border-none focus-visible:ring-0 resize-none text-lg placeholder:secondary"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submission Button */}

          <Button
            type="submit"
            className="py-5 font-semibold border-2 border-primary w-full rounded-md
          text-xl cursor-pointer hover:scale-[0.95] active:scale-[0.99] transition-all duration-400 ease-in-out"
          >
            Post to Immutable Ledger
          </Button>
        </form>
      </Form>
      {/* Gas Notice */}
      <p className="mt-2 text-center text-gray-400 text-sm">
        Estimated Gas: 0.0001 Sepolia ETH (Paid by sender)
      </p>
    </div>
  );
}
