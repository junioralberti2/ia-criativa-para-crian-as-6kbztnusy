declare global {
  interface Window {
    fbq: any
    _fbq: any
  }
}

export const FB_PIXEL_ID = '1204931778279458'
export const FB_CAPI_TOKEN =
  'EAF1Qz1UQG0cBQiOUJPtPZAqdUfuG9SDAv7Xx9HRplDqte42VDZCZAKge8appRT8tvJmTO44N7TLhQpkgNtUiMde1TVIAqBNuNo2gMaUv4wsEzFAGJA5xY1DrlP4zC6kBXSmHNLRekAMxb4jTknYg0kHqSp5rdnu7aaPmf21hDwplfprZBB3oBZCgBQABGggZDZD'

export const initFacebookPixel = () => {
  if (window.fbq) return
  ;(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js',
  )

  window.fbq('init', FB_PIXEL_ID)
}

export const trackEvent = async (
  eventName: string,
  params: Record<string, any> = {},
) => {
  const eventId =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : 'evt_' + Date.now() + Math.random().toString(36).substr(2, 9)

  // 1. Track Browser Pixel
  if (window.fbq) {
    window.fbq('track', eventName, params, { eventID: eventId })
  }

  // 2. Track Conversion API (Client-side attempt as requested)
  try {
    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: 'website',
          event_source_url: window.location.href,
          user_data: {
            client_user_agent: navigator.userAgent,
            // Additional user data would go here if available (hashed)
          },
          custom_data: params,
        },
      ],
      access_token: FB_CAPI_TOKEN,
    }

    // Using keepalive to ensure the request completes even if the page unloads (e.g., clicking a link)
    await fetch(`https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
      keepalive: true,
    })
  } catch (error) {
    console.warn('Facebook CAPI Error:', error)
  }
}
