import React, {useState} from "react";
import {
    TextField,
    Button,
    Typography,
    Stack,
    Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Line from "@components/Line";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
    submitContactForm,
    resetContactState,
} from '../redux/slices/contactSlice';

/* ---------- styles ---------- */


const Section = styled('section')({
    position: 'relative',
    padding: '96px 16px',
    display: 'flex',
    justifyContent: 'center',
    background: 'radial-gradient(ellipse at center, #3b2f5f 0%,    #2f254f 22%,    #241d40 40%,    #19152f 60%,    #120f22 80%,    #0b0916 100%)',
});

const FormWrapper = styled(Box)({
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

     const dispatch = useAppDispatch();
     const { loading, success, error } = useAppSelector((state) => state.contact);

     const [formData, setFormData] = useState({
         firstName: '',
         lastName: '',
         phone: '',
         email: '',
         message: '',
     });

     const handleChange = (
         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
         const { name, value } = e.target;

         setFormData((prev) => ({
             ...prev,
             [name]: value,
         }));

         if (success || error) {
             dispatch(resetContactState());
         }
     };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();

         const resultAction = await dispatch(submitContactForm(formData));

         if (submitContactForm.fulfilled.match(resultAction)) {
             setFormData({
                 firstName: '',
                 lastName: '',
                 phone: '',
                 email: '',
                 message: '',
             });
         }
     };

    return (
        <Box>
            <Line/>
            <Section>
                <FormWrapper>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
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
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <StyledInput
                                    fullWidth
                                    label="Last name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Stack>

                            {/* Phone */}
                            <StyledInput
                                fullWidth
                                label="Phone"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            {/* Email */}
                            <StyledInput
                                fullWidth
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            {/* Message */}
                            <StyledInput
                                fullWidth
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={4}
                            />

                            {/* Submit */}
                            <SubmitButton fullWidth type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Send message'}
                            </SubmitButton>
                            {success && (
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    Message sent successfully.
                                </Typography>
                            )}

                            {error && (
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    {error}
                                </Typography>
                            )}
                        </Stack>
                    </form>
                </FormWrapper>
            </Section>
        </Box>
    );
 }

export default ContactForm;
