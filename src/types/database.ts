export interface Profile {
  id: string
  phone: string | null
  full_name: string | null
  avatar_url: string | null
  created_at: string
}

export interface Property {
  id: string
  title: string
  location_name: string
  category: 'Beach' | 'Mountain' | 'Camping' | 'Apartment' | string
  price_per_night: number
  rating: number
  reviews_count: number
  images: string[]
  bedrooms: number
  beds: number
  bathrooms: number
  max_guests: number
  description: string | null
  amenities: string[]
  check_in_time: string
  check_out_time: string
  host_name: string | null
  host_avatar: string | null
  created_at: string
}

export interface Favorite {
  id: string
  user_id: string
  property_id: string
  created_at: string
  property?: Property
}

export interface Booking {
  id: string
  ref_number: string
  user_id: string
  property_id: string
  start_date: string
  end_date: string
  guests: number
  total_price: number
  payment_method: string
  status: 'confirmed' | 'cancelled' | 'completed'
  created_at: string
  property?: Property
}

export interface Review {
  id: string
  property_id: string
  user_id?: string
  author_name: string
  author_avatar?: string
  rating: number
  content: string
  stay_duration?: string
  created_at: string
}
