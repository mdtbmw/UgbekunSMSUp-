# PowerShell Script to Add Ugbekun SMSUP+ Specific Folders and Files
#
# IMPORTANT:
# 1. Run the manual 'npx create-next-app@latest ugbekun-smsup' and 'npm install ...'
#    commands FIRST, as outlined in the instructions.
# 2. Navigate INSIDE your 'ugbekun-smsup' project directory in PowerShell
#    BEFORE running this script.
#
# Instructions:
# 1. Save this script as a .ps1 file (e.g., Setup-UgbekunExtras.ps1)
#    INSIDE your already created 'ugbekun-smsup' project directory.
# 2. Open PowerShell.
# 3. Navigate INSIDE your 'ugbekun-smsup' project directory.
#    Example:
#    D:
#    cd \Nodejs\Projects\ugbekun-smsup
# 4. Run the script: .\Setup-UgbekunExtras.ps1
# 5. Review the output. It will create the additional structure.
# 6. You will then need to copy the code content from the provided immersive blocks
#    into these newly created empty files.

$ErrorActionPreference = "Stop" # Stop script on unhandled errors

Write-Host "--------------------------------------------------------------------"
Write-Host "Attempting to add Ugbekun SMSUP+ specific structure..."
Write-Host "Current Directory: $(Get-Location)"
Write-Host "This script assumes 'npx create-next-app' has already been run."
Write-Host "--------------------------------------------------------------------"

# --- Helper Function to Create File with Path ---
function New-FileWithDirectory {
    param (
        [string]$Path
    )
    $ParentDir = Split-Path -Path $Path
    try {
        if ($ParentDir -and (-not (Test-Path -Path $ParentDir))) {
            New-Item -ItemType Directory -Path $ParentDir -Force | Out-Null
            Write-Host "[SUCCESS] Created directory for: $ParentDir"
        }
        if (-not (Test-Path -Path $Path)) {
            New-Item -ItemType File -Path $Path -Force | Out-Null
            Write-Host "[SUCCESS] Created file: $Path"
        } else {
            Write-Host "[INFO] File already exists (possibly from a previous run or manual creation): $Path"
        }
    } catch {
        Write-Error "[FAILURE] Error creating file or directory for '$Path': $($_.Exception.Message)"
    }
}

# --- Create Additional Directories Not Created by create-next-app ---
Write-Host "Creating additional directory structure..."
$additionalDirectories = @(
    "components",
    "components/common",
    "components/layout",
    "components/auth",
    "components/sections",
    "components/sections/admission",
    "components/sections/students",
    "components/sections/employee",
    "components/sections/certificate",
    "components/sections/exam",
    "components/sections/library",
    "components/sections/accounting",
    "components/sections/rewards",
    "components/sections/governance",
    "contexts",
    "cardano",
    "cardano/policies"
)

foreach ($dir in $additionalDirectories) {
    try {
        if (-not (Test-Path -Path $dir)) {
            New-Item -ItemType Directory -Path $dir -Force | Out-Null
            Write-Host "[SUCCESS] Created directory: $dir"
        } else {
            Write-Host "[INFO] Directory already exists: $dir"
        }
    } catch {
        Write-Error "[FAILURE] Error creating directory '$dir': $($_.Exception.Message)"
    }
}

# --- Create Placeholder Files for Ugbekun Specific Structure ---
Write-Host "Creating Ugbekun SMSUP+ specific placeholder files..."
$additionalFiles = @(
    # Components - Common
    "components/common/Modal.jsx",
    "components/common/InfoBox.jsx",
    "components/common/CopyableText.jsx",
    "components/common/PageHeader.jsx",
    "components/common/DataTable.jsx",
    "components/common/FormElements.jsx",

    # Components - Layout
    "components/layout/Sidebar.jsx",
    "components/layout/MobileMenuButton.jsx",
    "components/layout/SidebarOverlay.jsx",

    # Components - Auth
    "components/auth/LandingPage.jsx",
    "components/auth/LoginPage.jsx",

    # Components - Sections (These will be created empty)
    "components/sections/DashboardSection.jsx",
    "components/sections/SubscriptionSection.jsx",
    "components/sections/CustomDomainSection.jsx",
    "components/sections/FrontendSettingsSection.jsx",
    "components/sections/ReceptionSection.jsx",
    "components/sections/admission/AdmissionSection.jsx",
    "components/sections/admission/AddApplicantModal.jsx",
    "components/sections/students/StudentDetailsSection.jsx",
    "components/sections/students/AddStudentModal.jsx",
    "components/sections/ParentsSection.jsx",
    "components/sections/employee/EmployeeSection.jsx",
    "components/sections/employee/AddEmployeeModal.jsx",
    "components/sections/CardManagementSection.jsx",
    "components/sections/certificate/CertificateSection.jsx",
    "components/sections/certificate/IssueCertificateModal.jsx",
    "components/sections/HumanResourceSection.jsx",
    "components/sections/AcademicSection.jsx",
    "components/sections/LiveClassRoomsSection.jsx",
    "components/sections/AttachmentsBookSection.jsx",
    "components/sections/HomeworkSection.jsx",
    "components/sections/exam/ExamMasterSection.jsx",
    "components/sections/exam/AddExamModal.jsx",
    "components/sections/OnlineExamSection.jsx",
    "components/sections/SupervisionSection.jsx",
    "components/sections/AttendanceSection.jsx",
    "components/sections/library/LibrarySection.jsx",
    "components/sections/library/AddBookModal.jsx",
    "components/sections/EventsSection.jsx",
    "components/sections/BulkSmsEmailSection.jsx",
    "components/sections/accounting/StudentAccountingSection.jsx",
    "components/sections/accounting/OfficeAccountingSection.jsx",
    "components/sections/accounting/RecordPaymentModal.jsx",
    "components/sections/MessageSection.jsx",
    "components/sections/ReportsSection.jsx",
    "components/sections/rewards/RewardsSection.jsx",
    "components/sections/rewards/IssueBadgeModal.jsx",
    "components/sections/governance/GovernanceSection.jsx",
    "components/sections/governance/CreateProposalModal.jsx",
    "components/sections/AuditLogSection.jsx",
    "components/sections/SettingsSection.jsx",

    # Contexts
    "contexts/AppContext.jsx",

    # Cardano Policies
    "cardano/policies/certificate_minter.ak",

    # Environment Example File
    ".env.local.example"
)

foreach ($file in $additionalFiles) {
    New-FileWithDirectory -Path $file # Helper function handles try-catch internally
}

# --- Create .env.local.example content ---
Write-Host "Creating content for .env.local.example..."
$envExampleContent = @"
# Cardano / MeshJS Configuration
NEXT_PUBLIC_BLOCKFROST_API_KEY="your_blockfrost_project_id_for_the_chosen_network"
NEXT_PUBLIC_CARDANO_NETWORK="preprod" # or "preview" - must match Blockfrost key and wallet network
NEXT_PUBLIC_CERTIFICATE_POLICY_ID="your_aiken_compiled_certificate_minting_policy_id"
NEXT_PUBLIC_ADMIN_WALLET_ADDRESS="your_bech32_admin_wallet_address_for_on-chain_checks_or_display"

# Add other environment variables here if needed
"@
try {
    $envExampleContent | Out-File -FilePath ".env.local.example" -Encoding utf8 -Force
    Write-Host "[SUCCESS] Created .env.local.example"
} catch {
    Write-Error "[FAILURE] Error creating .env.local.example: $($_.Exception.Message)"
}

# --- Update .gitignore if needed (create-next-app usually makes a good one) ---
# This script will append Aiken specific ignores if not present.
Write-Host "Checking/Updating .gitignore for Aiken artifacts..."
$aikenIgnores = @(
    "", # Newline for separation
    "# Aiken build files",
    "/artifacts/",
    "/aiken.lock"
)
$gitignorePath = ".gitignore"
try {
    if (Test-Path $gitignorePath) {
        $currentGitignoreContent = Get-Content $gitignorePath
        $needsUpdate = $false
        foreach ($ignoreLine in $aikenIgnores) {
            if ($ignoreLine.Trim() -eq "" -or (-not ($currentGitignoreContent -match [regex]::Escape($ignoreLine)))) {
                $needsUpdate = $true
                break
            }
        }
        if ($needsUpdate) {
            Add-Content -Path $gitignorePath -Value $aikenIgnores
            Write-Host "[SUCCESS] Appended Aiken specific entries to .gitignore"
        } else {
            Write-Host "[INFO] .gitignore already contains Aiken specific entries or is sufficient."
        }
    } else {
        Write-Warning "[WARNING] .gitignore not found. `create-next-app` should have created this. Please check your Next.js setup."
    }
} catch {
    Write-Error "[FAILURE] Error updating .gitignore: $($_.Exception.Message)"
}


Write-Host "--------------------------------------------------------------------"
Write-Host "Ugbekun SMSUP+ specific structure setup attempt complete."
Write-Host "Review the output above for any [FAILURE] messages."
Write-Host "--------------------------------------------------------------------"
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Copy the code content from the provided immersive blocks into the respective .jsx, .js, .css files."
Write-Host "2. Create a '.env.local' file by copying '.env.local.example' and add your API keys and Policy ID."
Write-Host "3. Compile your Aiken policy (cardano/policies/certificate_minter.ak) and update the Policy ID in '.env.local'."
Write-Host "4. Run 'npm run dev' to start the development server."

Read-Host "Script finished. Press Enter to exit..."
