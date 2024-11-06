/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: 'true',
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			transitionTimingFunction: {
				'custom-ease': 'cubic-bezier(0.76, 0, 0.24, 1)'
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(179.91deg, #DDF2E8 0.54%, #70C398 50.5%, #4DCE6D 100.45%)',
				'custom-gradient-2': 'linear-gradient(180deg, #F3FFFB 0%, #77DBB6 36.93%)',
			  'referral-gradient':'linear-gradient(180deg, #223A78 0%, #139A68 100%)',
			  'referral-btn-grad':'linear-gradient(270deg, #365AB8 0%, #19CB89 100%)',
			  'circle-main-grad':'linear-gradient(270deg, #FFFFFF 0%, #139A68 100%)',
			  'grad-text':'linear-gradient(270deg, #223A78 0%, #139A68 100%)',
			  'reachusemail-grad':'linear-gradient(180deg, #ECFFF8 0%, #B3FFE3 100%)',
			  'support-circle-grad':'linear-gradient(180deg, #CFFBEB 0%, #32E6A4 100%)',
			  'insight-circle-grad':' linear-gradient(180deg, rgba(34, 58, 120, 0.6) 0%, rgba(19, 154, 104, 0.6) 52.26%);',
			  'home-link-grad':'linear-gradient(0deg, #FFFFFF 0%, #5FDAAC 49%)',
			},
			colors: {
				maingreen: '#139A68',
				secondarygreen: '#C7FFEA',
				lightgray: '#3D5656',
				gray: '#464646',
				mediumgray: '#8E8E8E',
				mainblue: '#223A78',
				lightgreen: '#54AC77',
				lightdark: '#121212',
				mediumdark: '#262626',
				mainred: '#BE0000',
				secondarytext: '#8A8A8A',
			  mediumgreen:'#D0FFEE',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				custom: '0px 4px 9px -2px #00000040',
				subscription: '0px 4px 4px 0px #00000040',
				subscriptionsecond: ' 0px 4px 7px -5px #00000040',
				widget: '0px -3px 11px 5px #00000033',
				header: '0px 4px 10px 0px #0000001A',
			  dateselect:'0px 2.72px 1.81px 0px #0047FF33',
		  },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'caret-blink': {
					'0%,70%,100%': {
						opacity: '1'
					},
					'20%,50%': {
						opacity: '0'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
  }