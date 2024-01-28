// isWithinInterval is available on v1 but not v3
import { isWithinInterval, startOfDay } from 'date-fns';

export default async function Index() {
  const dateStr = new Date().toISOString();
  // Passing dateStr shouldn't surface a warning as we should resolve to v1.
  const today = startOfDay(dateStr);
  return (
    <>
      <p>
        {isWithinInterval(today, {
          end: today,
          start: today,
        })}
      </p>
    </>
  );
}
