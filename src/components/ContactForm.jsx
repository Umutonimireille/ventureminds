import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center p-12 rounded-2xl bg-brand-green/10 border border-brand-green/30"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-brand-green mb-2">Message Sent!</h3>
        <p className="text-white/60 mb-6">Thank you for reaching out. We&apos;ll get back to you soon.</p>
        <Button variant="secondary" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-brand-gray/30 border ${
            errors.name ? 'border-brand-red' : 'border-white/10'
          } text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-sm text-brand-red">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-brand-gray/30 border ${
            errors.email ? 'border-brand-red' : 'border-white/10'
          } text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-brand-red">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg bg-brand-gray/30 border ${
            errors.message ? 'border-brand-red' : 'border-white/10'
          } text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors resize-none`}
          placeholder="Tell us how we can collaborate..."
        />
        {errors.message && <p className="mt-1 text-sm text-brand-red">{errors.message}</p>}
      </div>

      <Button type="submit" color="#2E9E44">
        Send Message
      </Button>
    </form>
  )
}
