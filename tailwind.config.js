module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) rotate(45deg)' },
          '50%': { transform: 'translateY(20px) rotate(45deg)' },
        }
      }
    }
  }
}