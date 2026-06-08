export interface ApiResponse<T> {
  data:    T;
  message: string;
  status:  number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
  links: PaginationLinks;
}

export interface PaginationMeta {
  current_page: number;
  last_page:    number;
  per_page:     number;
  total:        number;
  from:         number | null;
  to:           number | null;
}

export interface PaginationLinks {
  first: string | null;
  last:  string | null;
  prev:  string | null;
  next:  string | null;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status:  number;
}

export interface PaginationParams {
  page?:     number;
  per_page?: number;
  cursor?:   string;
}
