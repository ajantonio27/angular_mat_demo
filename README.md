# Angular Material Registration Form
### Finals Lab Activity 4 — Angular Material Hands-on Demo

A complete user registration form built with Angular Material components, Reactive Forms, and form validation.

---

## ✅ Angular Material Components Used

### Base Components (from demo):
| Component | Module | Used For |
|-----------|--------|----------|
| `mat-form-field` | `MatFormFieldModule` | Field wrappers |
| `matInput` | `MatInputModule` | Text inputs |
| `mat-radio-group/button` | `MatRadioModule` | Gender selection |
| `mat-datepicker` | `MatDatepickerModule` | Birth date |
| `mat-slider` | `MatSliderModule` | Skill level |
| `mat-raised-button` | `MatButtonModule` | Submit button |

### Extra Components Added (+3 required):
| Component | Module | Used For |
|-----------|--------|----------|
| `mat-select` | `MatSelectModule` | Country dropdown (#1) |
| `mat-chip` | `MatChipsModule` | Interests selection (#2) |
| `mat-checkbox` | `MatCheckboxModule` | Agree to terms (#3) |
| `mat-icon` | `MatIconModule` | Icons throughout form (bonus) |
| `matTooltip` | `MatTooltipModule` | Hover hints (bonus) |
| `mat-divider` | `MatDividerModule` | Visual separators (bonus) |

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/angular_mat_demo.git
cd angular_mat_demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the App
```bash
ng serve
```

Open your browser at `http://localhost:4200`

---

## 📁 Project Structure
```
src/
└── app/
    ├── register/
    │   ├── register.component.ts   ← Logic, FormGroup, Validators
    │   ├── register.component.html ← Material form template
    │   └── register.component.css  ← Styling
    ├── app.component.ts
    ├── app.component.html
    └── app.config.ts
```

---

## 📋 Form Fields & Validation

| Field | Type | Validation |
|-------|------|------------|
| Username | Text input | Required |
| Email | Text input | Required, valid email format |
| Password | Password input | Required, min 8 characters |
| Gender | Radio buttons | Required |
| Birth Date | Date picker | Required |
| Country | Dropdown (Select) | Required |
| Address | Textarea | Optional |
| Interests | Chips | Optional (multi-select) |
| Angular Skill Level | Slider | Default: 5 (range 1–10) |
| Agree to Terms | Checkbox | Required (must be checked) |