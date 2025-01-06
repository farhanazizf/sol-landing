import { FC } from "react";

interface TimeScheduleProps {
  day: string;
  hours: string;
}

const TimeSchedule: FC<TimeScheduleProps> = ({ day, hours }) => (
  <div className="flex justify-between items-center py-1">
    <span className="text-gray-600">{day}</span>
    <span className="text-gray-800 font-medium">{hours}</span>
  </div>
);

export const OperationalHours = () => {
  const schedule = [
    { day: "Senin - Jumat", hours: "08.00 - 16.00 WIB" },
    { day: "Sabtu", hours: "08.00 - 12.00 WIB" },
  ];

  return (
    <div className="space-y-2">
      {schedule.map((item, index) => (
        <TimeSchedule key={index} {...item} />
      ))}
    </div>
  );
}