# MetaHoof Creator Program  - Anti-Abuse Policy & Referral Attribution Logic

## 1️⃣ Anti-Abuse Policy

To maintain the integrity of the MetaHoof Creator Program and ensure that $UOS rewards are distributed fairly and sustainably, the following rules and monitoring measures will be enforced.

### 1. Prohibited Activities

Creators found engaging in any of the following will be disqualified from the program, forfeit any accrued rewards, and may be banned from MetaHoof:

- **Self-referrals**: Creating multiple accounts under one’s own referral link or inviting known alternate identities.
- **Bot traffic / fake accounts**: Using automation, scripts, or click farms to simulate user actions.
- **Airdrop farming behavior**: Onboarding users who only perform minimum actions to trigger rewards (e.g. one race, no further activity).
- **Misleading promotions**: Using deceptive advertising or false claims to attract users.
- **Incentivizing third parties** to simulate in-game actions without genuine gameplay intent.

### 2. Referral Validation Criteria

A referred user must meet **at least one** of the following to be considered valid:

- Mint an NFT via MetaHoof Launchpad
- Complete **3 or more paid races**
- Pay a **stud fee**
- Complete a **marketplace transaction**

> ⚠️ A user who signs up but performs **no economic activity** will **not generate** any Creator reward.

### 3. Monitoring & Enforcement

- **Automated Abuse Detection**:
  - IP tracking  
  - Wallet clustering  
  - Device/browser fingerprinting  
  - Velocity limits
- **Manual Review Triggers**:
  - Sudden spikes in inactive referrals  
  - High reward-to-activity ratio  
  - Similar usage patterns across accounts
- **Enforcement Actions**:
  - Temporary or permanent **tier freezing**  
  - **Reward forfeiture** for flagged referrals  
  - **Ban** from all Creator campaigns  
  - Right to **appeal** via Discord or official contact

### 4. Multi-Account Prevention

Each account must be associated with:

- A **unique verified blockchain wallet**
- A **unique Discord ID**
- *(Optional)* A verified email address (for specific campaigns)

Wallets tied to known abuse or flagged patterns may be restricted from receiving or triggering referral rewards.

## 2️⃣ Referral Attribution Logic

### 1. Referral Method

Each Creator receives a unique referral code or link:  
`https://play.metahoof.com/?ref=hoofguy123`

On first visit:

- A **referral ID** is stored locally (e.g. cookie or localStorage)
- Once the user connects a wallet and signs up, the referral is **linked to their account**

### 2. Attribution Rules

| Scenario | Outcome |
|----------|---------|
| User signs up via referral and performs valid activity | ✅ Reward granted |
| User signs up without referral | ❌ No reward |
| Multiple referrals for the same user | ✅ **First-touch** wins |
| Referral ID is lost (cookies cleared, new device) | ❌ Attribution lost unless logged in |
| Self-referral attempt | ❌ Disqualified |

> 🧠 MetaHoof uses **first-touch attribution**, not last-click, to reward consistent funnel builders—not spammers.

### 3. Reward Timing & Validation

- Rewards are **only granted** after a referred user completes a **valid economic action**
- Some rewards may have **delayed payouts** (e.g. 24–72h) to verify the transaction (e.g. avoid race cancellations or refunds)
- High-earning Creators are subject to **monthly audits** for integrity review

## 3️⃣ Summary

| Topic | Policy |
|-------|--------|
| **Self-referrals** | ❌ Prohibited |
| **Referral method** | ✅ Unique code or link |
| **Attribution logic** | ✅ First-touch, activity required |
| **Valid referral** | ✅ Must perform at least 1 economic action |
| **Monitoring** | ✅ Automated + Manual |
| **Enforcement** | ✅ Tier freeze, ban, reward forfeiture |

MetaHoof is committed to building a **fair, sustainable, and creator-aligned economy**. This policy ensures that genuine community members are rewarded — while preserving the integrity of the ecosystem for everyone.