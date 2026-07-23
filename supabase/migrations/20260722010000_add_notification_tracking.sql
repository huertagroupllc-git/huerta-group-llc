-- Notification tracking for contact inquiries.
--
-- The contact_inquiries row remains the source of record for the inquiry
-- itself; these columns record only the operational outcome of the
-- internal email notification attempt. Written exclusively by trusted
-- server-side code (service_role). Public API roles continue to have no
-- access of any kind — RLS stays enabled with no policies.
--
-- notification_status values:
--   pending         row inserted, notification not yet attempted
--   sent            provider accepted the send request (not proof of
--                   final mailbox delivery)
--   failed          provider rejected the request or it errored/timed out
--   not_configured  notification env vars absent when the inquiry arrived

alter table public.contact_inquiries
  add column notification_status text not null default 'pending'
    constraint contact_inquiries_notification_status_valid check (
      notification_status in ('pending', 'sent', 'failed', 'not_configured')
    ),
  add column notification_attempted_at timestamptz,
  add column notification_message_id text
    constraint contact_inquiries_notification_message_id_length
      check (char_length(notification_message_id) <= 200),
  add column notification_error_code text
    constraint contact_inquiries_notification_error_code_length
      check (char_length(notification_error_code) <= 200);
