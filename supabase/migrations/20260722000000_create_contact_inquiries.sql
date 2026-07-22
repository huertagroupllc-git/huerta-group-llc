-- Contact inquiry intake table.
--
-- Written to exclusively by trusted server-side application code using the
-- service-role key (which bypasses RLS). Row Level Security is enabled with
-- NO policies and all table privileges are revoked from the public API
-- roles, so anonymous and authenticated clients can neither read, insert,
-- update, nor delete inquiry records through the Supabase API.

create table public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null
    constraint contact_inquiries_name_length check (char_length(name) between 1 and 200),
  organization text not null
    constraint contact_inquiries_organization_length check (char_length(organization) between 1 and 200),
  email text not null
    constraint contact_inquiries_email_length check (char_length(email) between 3 and 320),
  inquiry_type text not null default 'general'
    constraint contact_inquiries_inquiry_type_valid check (
      inquiry_type in (
        'operations-systems',
        'process-development',
        'technology-automation',
        'organizational-growth',
        'partnership',
        'general'
      )
    ),
  message text not null
    constraint contact_inquiries_message_length check (char_length(message) between 1 and 5000),
  source_path text
    constraint contact_inquiries_source_path_length check (char_length(source_path) <= 200),
  status text not null default 'new'
    constraint contact_inquiries_status_valid check (
      status in ('new', 'reviewing', 'contacted', 'closed', 'spam')
    )
);

comment on table public.contact_inquiries is
  'Public website inquiry submissions. Server-side writes only; no public API access.';

-- Least privilege: no public API access of any kind. Only the
-- service_role (used exclusively by trusted server-side code, and which
-- bypasses RLS) may touch the table. The explicit grant is required
-- because tables created through the management interface do not
-- automatically receive Supabase's default API-role grants.
alter table public.contact_inquiries enable row level security;
revoke all on table public.contact_inquiries from anon, authenticated;
grant all on table public.contact_inquiries to service_role;
