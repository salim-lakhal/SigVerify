# SigVerify

[![CI](https://github.com/salim-lakhal/SigVerify/actions/workflows/ci.yml/badge.svg)](https://github.com/salim-lakhal/SigVerify/actions/workflows/ci.yml)
![Status](https://img.shields.io/badge/status-MVP-yellow)

A document signing and signature verification platform built on the [XRP Ledger](https://xrpl.org). SigVerify uses blockchain immutability to provide tamper-proof, decentralized signature validation — replacing trust in a central authority with cryptographic proof on-chain.

## Screenshots

**Landing Page**

![Landing page](https://github.com/salim-lakhal/SigVerify/assets/145379511/f7f44484-515c-4cf9-9a6f-fe1cd0c7e255)

**Dashboard**

![Dashboard](https://github.com/salim-lakhal/SigVerify/assets/145379511/7bc9e588-2504-4edb-b621-6bc6f519aa98)

**Document Signing Flow**

![Document view](https://github.com/salim-lakhal/SigVerify/assets/145379511/81bb23dc-4700-44d4-b4bb-7f4ed77e0c08)

![Signature pad](https://github.com/salim-lakhal/SigVerify/assets/145379511/c86f57f9-d390-4e60-a6f0-cf74877f627a)

![Initials capture](https://github.com/salim-lakhal/SigVerify/assets/145379511/53047772-89d1-4a3d-af17-5104391c740a)

![Signature confirmation](https://github.com/salim-lakhal/SigVerify/assets/145379511/4acab52b-4fcb-4b32-8a1c-5ba5014e7b41)

**Document Management**

![Document list](https://github.com/salim-lakhal/SigVerify/assets/145379511/3f5b01c1-806c-494a-9b95-f1724c6647af)

![Send document](https://github.com/salim-lakhal/SigVerify/assets/145379511/c136844b-09b8-4912-8f5b-d8dc14451a8c)

**User Profile**

![Profile page](https://github.com/salim-lakhal/SigVerify/assets/145379511/9095b82d-0b64-44d1-8ca7-392375180920)

## How It Works

1. **Authenticate** — Users sign in via Clerk (email/OAuth). On first login, a user record is created in MongoDB.
2. **Create or select a document** — Pick from existing templates or create a new signing request.
3. **Sign** — Draw your signature and initials on an HTML5 canvas. The signature data is captured as a trimmed image.
4. **Send for co-signing** — Specify recipients by email. Each signer receives the document and signs independently.
5. **Anchor on XRPL** *(planned)* — Hash the signed document (SHA-512) and store the hash in an XRPL transaction memo field, creating an immutable, timestamped proof of signature.
6. **Verify** *(planned)* — Anyone can verify a document's authenticity by comparing its hash against the on-chain record. No intermediary needed.

## Architecture

```mermaid
graph TB
    User([User]) --> Auth[Clerk Auth]
    Auth --> App[Next.js App]

    App --> API[API Routes]
    API --> DB[(MongoDB)]
    API --> XRPL[XRP Ledger]

    subgraph "Frontend"
        App --> Pages[Pages]
        Pages --> Dashboard[Dashboard]
        Pages --> DocView[Document Viewer]
        Pages --> SigPad[Signature Pad]
        Pages --> Profile[Profile]
    end

    subgraph "Backend API"
        API --> CheckUser[/api/checkUser]
        API --> Templates[/api/createTemplate]
        API --> GetTemplates[/api/getTemplates]
        API --> SignReqs[/api/getSignRequests]
    end

    subgraph "Blockchain Layer (planned)"
        XRPL --> TxMemo[TX Memo: Document Hash]
        XRPL --> SigVerification[Signature Verification]
    end

    style XRPL stroke-dasharray: 5 5
    style TxMemo stroke-dasharray: 5 5
    style SigVerification stroke-dasharray: 5 5
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Auth | Clerk |
| Database | MongoDB |
| Styling | Tailwind CSS |
| UI Components | Radix UI |
| Signature Capture | react-signature-canvas |
| Blockchain | XRP Ledger *(planned)* |

## Project Structure

```
app/
├── api/                  # REST endpoints (App Router)
│   ├── checkUser/        # Create/verify user on first login
│   ├── createTemplate/   # Save document templates
│   ├── getTemplates/     # Fetch user templates
│   └── getSignRequests/  # Fetch pending signature requests
├── dashboard/            # Main hub — documents, requests, stats
├── create-document/      # Template selection
├── set-document/         # Document viewer + signature modal
├── manage/               # Document management
├── profile/              # User settings
├── sign-in/              # Clerk sign-in
└── sign-up/              # Clerk sign-up
components/
├── navbar/               # Navigation bar
├── signature/            # Multi-step signature pad
├── popup/                # Document send form
└── ui/                   # Button, Card, Table components
lib/
├── mongodb.ts            # MongoDB client + connection pooling
└── withAuth.tsx          # Auth HOC for protected routes
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A [Clerk](https://clerk.com) account (free tier works)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (free tier works)

### Setup

```bash
git clone https://github.com/salim-lakhal/SigVerify.git
cd SigVerify
npm install
cp .env.example .env
```

Fill in your `.env` with your Clerk and MongoDB credentials:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
MONGODB_URI=mongodb+srv://...
DB_NAME=sigverify
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Roadmap

- [x] Clerk authentication + protected routes
- [x] MongoDB user and template persistence
- [x] Multi-step signature and initials capture
- [x] Document template system
- [x] Dashboard with document overview
- [ ] XRPL wallet integration (Xaman)
- [ ] Document hash storage on-chain (TX memo field)
- [ ] On-chain signature verification
- [ ] IPFS document pinning (Pinata)
- [ ] End-to-end encryption (RSA-OAEP + AES-GCM)
- [ ] Multi-signature document flows
- [ ] Document upload (PDF, TXT)

## License

[MIT](LICENSE)
