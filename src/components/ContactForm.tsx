import React from "react";
import {
    TextField,
    Button,
    Typography,
    Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* ---------- styles ---------- */


const Section = styled('section')({
    position: 'relative',
    padding: '96px 16px',
    display: 'flex',
    justifyContent: 'center',
    background: 'radial-gradient(ellipse at center, #3b2f5f 0%,    #2f254f 22%,    #241d40 40%,    #19152f 60%,    #120f22 80%,    #0b0916 100%)',
});

const FormWrapper = styled('div')({
    width: '100%',
    maxWidth: 680,
    padding: 40,
    borderRadius: 28,
    background: 'rgba(17,18,24,0.65)',
    border: '1px solid rgba(201,166,107,0.22)',
    backdropFilter: 'blur(6px)',
});

const StyledInput = styled(TextField)({
    /* ---------------- TEXT COLOR ---------------- */

    '& .MuiInputBase-input': {
        color: '#fff',                 // обычный ввод
        caretColor: '#fff',
    },

    /* ---------------- OUTLINED ROOT ---------------- */

    '& .MuiOutlinedInput-root': {
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.02)',

        '& fieldset': {
            borderColor: 'rgba(201,166,107,0.28)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(201,166,107,0.45)',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#C9A66B',
        },

        /* ---------------- AUTOFILL FIX ---------------- */

        '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px rgba(17,18,24,0.95) inset',
            WebkitTextFillColor: '#fff',   // 🔥 СВЕТЛЫЙ ТЕКСТ
            caretColor: '#fff',
            borderRadius: 14,
        },

        '& textarea:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px rgba(17,18,24,0.95) inset',
            WebkitTextFillColor: '#fff',   // 🔥 СВЕТЛЫЙ ТЕКСТ
            caretColor: '#fff',
            borderRadius: 14,
        },
    },

    /* ---------------- LABEL ---------------- */

    '& .MuiInputLabel-root': {
        color: 'rgba(255,255,255,0.6)',
    },

    '& .MuiInputLabel-root.Mui-focused': {
        color: '#C9A66B',
    },

    /* ---------------- PLACEHOLDER ---------------- */

    '& input::placeholder, & textarea::placeholder': {
        color: 'rgba(255,255,255,0.45)',
        opacity: 1,
    },
});

const SubmitButton = styled(Button)({
    marginTop: 24,
    padding: '14px 0',
    borderRadius: 20,
    backgroundColor: '#C9A66B',
    color: '#111218',
    fontWeight: 500,
    letterSpacing: 1,
    '&:hover': {
        backgroundColor: '#E6C98A',
    },
});

/* ---------- component ---------- */

 const ContactForm = () => {
    return (
        <Section>
            <FormWrapper>
                <Stack spacing={3}>
                    {/* Header */}
                    <div>
                        <Typography variant="h5" gutterBottom>
                            Get in touch
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            Leave your details and message — we’ll get back to you shortly.
                        </Typography>
                    </div>

                    {/* First / Last name */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                    >
                        <StyledInput
                            fullWidth
                            label="First name"
                        />
                        <StyledInput
                            fullWidth
                            label="Last name"
                        />
                    </Stack>

                    {/* Phone */}
                    <StyledInput
                        fullWidth
                        label="Phone"
                        type="tel"
                    />

                    {/* Email */}
                    <StyledInput
                        fullWidth
                        label="Email"
                        type="email"
                    />

                    {/* Message */}
                    <StyledInput
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                    />

                    {/* Submit */}
                    <SubmitButton fullWidth>
                        Send message
                    </SubmitButton>
                </Stack>
            </FormWrapper>
        </Section>
    );
 }

export default ContactForm;
