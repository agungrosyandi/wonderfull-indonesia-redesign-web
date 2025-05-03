"use client";

import { Input, InputProps } from "@/components/ui/input";

import { Dispatch, SetStateAction, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { XIcon } from "lucide-react";
import { cn } from "@/utils/utils";

type InputTagsProps = InputProps & {
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
};

// export to konten-details.tsx -----------------------------------

export const InputTags = ({ onChange, value, ...props }: InputTagsProps) => {
  const [pendingDataPoint, setPendingDataPoint] = useState("");
  const [focused, setFocused] = useState(false);

  function addPendingDataPoint() {
    if (pendingDataPoint) {
      const newDataPoints = new Set([...value, pendingDataPoint]);
      onChange(Array.from(newDataPoints));
      setPendingDataPoint("");
    }
  }

  const { setFocus } = useFormContext();

  return (
    <div
      className={cn(
        "min-h-[20px] w-full rounded-lg border border-input bg-background  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        focused
          ? "ring-offset-2 outline-none ring-ring ring-2"
          : "ring-offset-0 outline-none ring-ring ring-0"
      )}
      onClick={() => setFocus("tags")}
    >
      {/* main component input tags ------------------------------------ */}

      <motion.div className="rounded-md min-h-[2.5rem] p-2 flex gap-2 flex-wrap items-center">
        {/* animate logic input tags component ----------------------- */}

        <AnimatePresence>
          {value.map((tag) => (
            <motion.div
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              exit={{ scale: 0 }}
              key={tag}
            >
              <Badge className="flex flex-row gap-2" variant={"secondary"}>
                {tag}
                <button
                  type="button"
                  onClick={() => onChange(value.filter((i) => i !== tag))}
                >
                  <XIcon className="w-3" />
                </button>
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* input tags component ----------------------- */}

        <div className="flex">
          <Input
            className="text-xs focus-visible:border-transparent border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Press enter to add tags"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addPendingDataPoint();
              }

              if (
                e.key === "Backspace" &&
                !pendingDataPoint &&
                value.length > 0
              ) {
                e.preventDefault();
                const newValue = [...value];
                newValue.pop();
                onChange(newValue);
              }
            }}
            value={pendingDataPoint}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setPendingDataPoint(e.target.value)}
            {...props}
          />
        </div>
      </motion.div>
    </div>
  );
};
