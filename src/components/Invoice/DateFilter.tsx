"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  customDate: Date,
  onSelect: (date: Date) => void;
}

export function DatePicker({ customDate, onSelect }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(customDate)
  const [calandarOpen, setCanlandarOpen] = React.useState(false);

  const handleDateSelect = (newDate: Date) => {
    if (newDate) {
      onSelect(newDate);
    }
  };

  return (
    <Popover open={calandarOpen} onOpenChange={setCanlandarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[200px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={() => {
            setDate
            setCanlandarOpen(false)
          }}
          onDayClick={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
