const memberLinks = [
  {href: '/members', label: 'Matches'},
  {href: '/lists', label: 'Lists'},
  {href: '/messages', label: 'Messages'},
]

const adminLinks = [
  {
    href: '/admin/moderation',
    label: 'Photo Moderation',
  },
]

const navItems = memberLinks

// const navItems =
//   session?.user.role === "ADMIN"
//    ? adminLinks : memberLinks

export default navItems
