/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing

---
📋 Instructions:
Each group will design and implement three functions to solve event management challenges.
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================

// ============================================
// 🧩 Task 1: Generate Attendee Badge
// Write a function that takes a name and role, and returns:
// "Name: Alice, Role: Speaker"
// ============================================

// Example Implementation:
// function generateBadge(name, role) {
//   return `Name: ${name}, Role: ${role[0].toUpperCase() + role.slice(1)}`;
// }

// ============================================
// 🧩 Task 2: Calculate Event Cost
// Write a function that takes the number of attendees and cost per attendee.
// If attendees > 100, apply a 10% discount to the total cost.
// Example: calculateCost(120, 25) → 2700
// ============================================

// Example Implementation:
// function calculateCost(numAttendees, costPerAttendee) {
//   let total = numAttendees * costPerAttendee;
//   if (numAttendees > 100) {
//     total *= 0.9; // Apply 10% discount
//   }
//   return total;
// }

// ============================================
// 🧩 Task 3: Validate Email
// Write a function that returns true if an email contains both '@' and '.', else false.
// ============================================

// Example Implementation:
// function isValidEmail(email) {
//   return email.includes("@") && email.includes(".");
// }

// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements (parameters, return values)
// - Assign roles:
//   • Pseudocode Writer
//   • Initial Coder
//   • Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine each function

// 🧪 Testing Phase:
// - Each team member writes at least one test case for each function

// 🎤 Presentation Phase:
// - Present your functions to the class
// - Explain design decisions and testing process

// ✅ Good luck, and write clean, reusable code!
