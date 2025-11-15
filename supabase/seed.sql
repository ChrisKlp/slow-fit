-- Seed data for exercises table
INSERT INTO public.exercises (name, description, video_url, extra_videos, type) VALUES
  (
    'Push-ups',
    'Classic upper body exercise targeting chest, shoulders, and triceps. Start in plank position with hands shoulder-width apart.',
    'https://www.youtube.com/watch?v=IODxDxX7oi4',
    ARRAY['https://www.youtube.com/watch?v=example1'],
    'reps'
  ),
  (
    'Squats',
    'Fundamental lower body exercise. Stand with feet shoulder-width apart, lower your hips back and down as if sitting in a chair.',
    'https://www.youtube.com/watch?v=aclHkVaku9U',
    ARRAY['https://www.youtube.com/watch?v=example2', 'https://www.youtube.com/watch?v=example3'],
    'reps'
  ),
  (
    'Plank',
    'Core strengthening exercise. Hold a push-up position with your body in a straight line from head to heels.',
    'https://www.youtube.com/watch?v=pSHjTRCQxIw',
    ARRAY['https://www.youtube.com/watch?v=example4'],
    'time'
  ),
  (
    'Lunges',
    'Single-leg exercise for lower body strength. Step forward and lower your hips until both knees are bent at 90 degrees.',
    'https://www.youtube.com/watch?v=QOVaHwm-Q6U',
    NULL,
    'reps'
  ),
  (
    'Burpees',
    'Full-body cardio exercise. Start standing, drop to push-up position, perform push-up, jump feet forward, and jump up.',
    'https://www.youtube.com/watch?v=dZgVxmf6jkA',
    ARRAY['https://www.youtube.com/watch?v=example5'],
    'reps'
  ),
  (
    'Mountain Climbers',
    'Dynamic core and cardio exercise. From plank position, alternate bringing knees toward chest in a running motion.',
    'https://www.youtube.com/watch?v=nmwgirgXLYM',
    ARRAY['https://www.youtube.com/watch?v=example6', 'https://www.youtube.com/watch?v=example7'],
    'time'
  ),
  (
    'Pull-ups',
    'Upper body pulling exercise. Hang from a bar and pull yourself up until chin is above the bar.',
    'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    NULL,
    'reps'
  ),
  (
    'Dead Hang',
    'Grip strength and shoulder stability exercise. Simply hang from a pull-up bar with arms fully extended.',
    'https://www.youtube.com/watch?v=dVf6nkVS-fE',
    ARRAY['https://www.youtube.com/watch?v=example8'],
    'time'
  ),
  (
    'Jumping Jacks',
    'Classic cardio warm-up exercise. Jump while spreading legs and raising arms, then return to starting position.',
    'https://www.youtube.com/watch?v=c4DAnQ6DtF8',
    NULL,
    'reps'
  ),
  (
    'Wall Sit',
    'Isometric lower body exercise. Slide back against wall until thighs are parallel to ground and hold position.',
    'https://www.youtube.com/watch?v=y-wV4Venusw',
    ARRAY['https://www.youtube.com/watch?v=example9'],
    'time'
  );

-- Note: For creating admin user with email admin@example.com and password 'password'
-- This should be done through Supabase Dashboard or Auth API for security reasons
-- You can create the user by:
-- 1. Going to Supabase Dashboard -> Authentication -> Users -> Add User
-- 2. Or using the Supabase CLI: supabase auth signup --email admin@example.com --password password
-- 3. Or using the API client in your application

-- If you need to create the user via SQL for development purposes only:
-- This is a placeholder - actual user creation requires proper password hashing
-- and should be done through Supabase Auth API
