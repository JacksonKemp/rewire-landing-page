CREATE TABLE waitlist_emails (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  source TEXT DEFAULT 'landing_page',
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable Row Level Security
ALTER TABLE waitlist_emails ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON waitlist_emails
  FOR INSERT WITH CHECK (true);

-- Create policy to prevent updates/deletes
CREATE POLICY "Prevent updates" ON waitlist_emails
  FOR UPDATE USING (false);

CREATE POLICY "Prevent deletes" ON waitlist_emails
  FOR DELETE USING (false);

-- Create index on email for faster lookups
CREATE INDEX waitlist_emails_email_idx ON waitlist_emails (email);

-- Add comment to describe the table
COMMENT ON TABLE waitlist_emails IS 'Stores email addresses collected from the landing page waitlist'; 