-- ==============================================================================
-- WANDERSTAY DATABASE SCHEMA (SUPABASE POSTGRESQL)
-- Run this script in your Supabase Dashboard -> SQL Editor
-- ==============================================================================

-- 1. Enable UUID Extension
create extension if not exists "uuid-ossp";

-- 2. Profiles Table (Linked to Supabase Auth)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  phone text,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Profiles
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- 3. Properties Table
create table if not exists public.properties (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  location_name text not null,
  category text default 'Beach',
  price_per_night numeric not null,
  rating numeric default 5.0,
  reviews_count integer default 0,
  images text[] not null,
  bedrooms integer default 1,
  beds integer default 1,
  bathrooms integer default 1,
  max_guests integer default 2,
  description text,
  amenities text[],
  check_in_time text default '14:00',
  check_out_time text default '12:00',
  host_name text,
  host_avatar text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Properties
alter table public.properties enable row level security;
create policy "Properties are viewable by everyone" on public.properties for select using (true);

-- 4. Favorites Table
create table if not exists public.favorites (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  property_id uuid references public.properties on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, property_id)
);

-- Enable RLS for Favorites
alter table public.favorites enable row level security;
create policy "Users can view own favorites" on public.favorites for select using (auth.uid() = user_id);
create policy "Users can insert own favorites" on public.favorites for insert with check (auth.uid() = user_id);
create policy "Users can delete own favorites" on public.favorites for delete using (auth.uid() = user_id);

-- 5. Bookings Table
create table if not exists public.bookings (
  id uuid default gen_random_uuid() primary key,
  ref_number text unique not null,
  user_id uuid references auth.users on delete cascade not null,
  property_id uuid references public.properties on delete cascade not null,
  start_date date not null,
  end_date date not null,
  guests integer default 1,
  total_price numeric not null,
  payment_method text default 'Mastercard •••• 4022',
  status text default 'confirmed',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Bookings
alter table public.bookings enable row level security;
create policy "Users can view own bookings" on public.bookings for select using (auth.uid() = user_id);
create policy "Users can insert own bookings" on public.bookings for insert with check (auth.uid() = user_id);

-- 6. Reviews Table
create table if not exists public.reviews (
  id uuid default gen_random_uuid() primary key,
  property_id uuid references public.properties on delete cascade not null,
  user_id uuid references auth.users on delete cascade,
  author_name text not null,
  author_avatar text,
  rating numeric check (rating >= 1 and rating <= 5),
  content text not null,
  stay_duration text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Reviews
alter table public.reviews enable row level security;
create policy "Reviews are viewable by everyone" on public.reviews for select using (true);
create policy "Authenticated users can insert reviews" on public.reviews for insert with check (auth.uid() = user_id);

-- ==============================================================================
-- SAMPLE SEED DATA (Phù hợp với 17 màn hình thiết kế WanderStay)
-- ==============================================================================

insert into public.properties (
  title, location_name, category, price_per_night, rating, reviews_count, images,
  bedrooms, beds, bathrooms, max_guests, description, amenities, host_name, host_avatar
) values
(
  'Balian treehouse',
  'Bali, Indonesia',
  'Mountain',
  320,
  4.5,
  262,
  array[
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
  ],
  1, 1, 1, 2,
  'Escape to an idyllic bohemian sanctuary nestled high in the emerald jungle canopy of Balian. Experience an authentic bamboo treehouse with 360-degree rainforest vistas, gentle ocean breezes, and the tranquil sounds of flowing river waters below.',
  array['Wifi', 'Kitchen', 'Private plunge pool', 'Tropical garden terrace', 'Exercise equipment', 'Free dryer - In unit'],
  'Made & Wayan',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
),
(
  'Luxury Resort in Omaha Beach',
  'Omaha Beach, New Zealand',
  'Beach',
  20,
  5.0,
  128,
  array[
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80'
  ],
  1, 2, 1, 2,
  'Beachfront villa with 2 king beds and endless ocean views.',
  array['Wifi', 'Kitchen', 'Pool', 'Outdoor space'],
  'Sarah',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
),
(
  'Designer Apartment in San Jose',
  'San Jose, California',
  'Apartment',
  28,
  5.0,
  94,
  array[
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
  ],
  1, 1, 1, 2,
  'Coastal retreat with 1 king bed and Scandinavian aesthetic.',
  array['Wifi', 'Kitchen', 'Internet access'],
  'Alex',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
);
