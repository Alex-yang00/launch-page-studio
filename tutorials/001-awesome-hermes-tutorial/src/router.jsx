import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NovitaSlidesPage from './pages/NovitaSlidesPage'
import EventPage from './pages/EventPage'
import EmailAgentPage from './pages/EmailAgentPage'
import MarketingAgentPage from './pages/MarketingAgentPage'
import MeetingNotesAgentPage from './pages/MeetingNotesAgentPage'
import DailyBriefingAgentPage from './pages/DailyBriefingAgentPage'
import ProTipsPage from './pages/ProTipsPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'event', element: <EventPage /> },
      { path: 'email-agent', element: <EmailAgentPage /> },
      { path: 'marketing-agent', element: <MarketingAgentPage /> },
      { path: 'meeting-notes-agent', element: <MeetingNotesAgentPage /> },
      { path: 'daily-briefing-agent', element: <DailyBriefingAgentPage /> },
      { path: 'pro-tips', element: <ProTipsPage /> },
    ],
  },
  { path: 'novita', element: <NovitaSlidesPage /> },
])
