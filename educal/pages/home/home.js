 // Course details logic from course-grid.html
 function showCourseDetails(courseId) {
    // Define different course content based on courseId
    const courses = {
       'mpower-mba': {
          title: 'mPower MBA - Mentorship for Aspiring Business Leaders',
          category: 'Business Administration',
          lessons: '43',
          rating: '4.5',
          instructor: 'Jim Séchen',
          price: 'Free',
          description: 'mPower MBA is a transformative program by SkillsPro – New Age Versity for Career and Life, designed to shape the next generation of industry-ready leaders. Centered around one-on-one mentorship, real-world exposure, and strategic skill-building, the program bridges the gap between academic learning and practical leadership. Through guided mentorship by experienced professionals and immersive learning experiences, mPower MBA empowers students to develop clarity, confidence, and the capabilities needed to lead in today\'s dynamic business landscape.',
          curriculum: [
             'Strategic Leadership & Management',
             'Financial Analysis & Planning',
             'Marketing Strategy & Brand Management',
             'Organizational Behavior & Culture',
             'Business Ethics & Corporate Governance',
             'Innovation & Entrepreneurship'
          ],
          duration: '12 months',
          level: 'Advanced'
       },
       'skillspro-mba': {
          title: 'SkillsPro MBA Connect – Partner Program',
          category: 'Business Development',
          lessons: '35',
          rating: '4.7',
          instructor: 'Sarah Parker',
          // price: '$49',
          description: 'SkillsPro MBA Connect is a collaborative Partner Program by SkillsPro – New Age Versity for Career and Life, designed to work in partnership with colleges and universities. Through this initiative, SkillsPro offers customized programs tailored to the unique needs of each institution, enhancing their MBA curriculum with industry-aligned content, expert mentorship, and practical skill development. The goal is to create a seamless bridge between academic learning and career readiness—empowering students to collaborate, learn, and lead effectively in the real world.',
          curriculum: [
             'Business Partnership Development',
             'Strategic Alliances & Networking',
             'Cross-functional Team Management',
             'Project Management & Execution',
             'Business Communication & Negotiation',
             'Industry Analysis & Market Research'
          ],
          duration: '8 months',
          level: 'Intermediate'
       },
       'skillspro-wilp': {
          title: 'SkillsPro Work Integrated Learning Programs (WILP)',
          category: 'Professional Development',
          lessons: '28',
          rating: '4.4',
          instructor: 'Mike Johnson',
          // price: '$79',
          description: 'SkillsPro\'s Work Integrated Learning Programs (WILP) are designed for working professionals and students seeking to upskill without taking a career break. These flexible, industry-aligned programs combine academic rigor with real-world application, enabling learners to grow while they work.',
          curriculum: [
             'Workplace Integration & Adaptation',
             'Professional Skills Development',
             'Industry-specific Training',
             'Project-based Learning',
             'Career Planning & Development',
             'Professional Networking'
          ],
          duration: '6 months',
          level: 'Beginner to Intermediate'
       },
       'executive-development': {
          title: 'Executive Development Programs / Management Development Programs',
          category: 'Leadership & Management',
          lessons: '32',
          rating: '4.8',
          instructor: 'Emma Wilson',
          // price: '$89',
          description: 'SkillsPro\'s Executive and Management Development Programs are curated for mid-to-senior-level professionals aiming to sharpen their strategic, leadership, and decision-making capabilities. These intensive, high-impact programs blend cutting-edge business insights with practical applications, enabling leaders to navigate complex challenges and drive organizational growth. Whether delivered on campus, online, or through blended formats, EDPs and MDPs are tailored to meet the evolving needs of individuals and corporate teams, empowering professionals to lead with confidence in a fast-changing business environment.',
          curriculum: [
             'Executive Leadership & Strategy',
             'Change Management & Transformation',
             'Strategic Decision Making',
             'Organizational Development',
             'Global Business Perspectives',
             'Executive Communication & Influence'
          ],
          duration: '10 months',
          level: 'Advanced'
       },
       'corporate-training': {
          title:'SheLeads – Empowering Young Women at the Undergraduate Level',
          category: 'Business & Professional Development',
          lessons: '28',
          rating: '4.7',
          instructor: 'Sarah Davis',
          // price: '$95',
          description: 'SheLeads is a flagship program designed exclusively for undergraduate girl students, focusing on building confidence, communication, and core career skills early in their academic journey. Through mentorship, interactive workshops, and real-world exposure, SheLeads inspires young women to discover their potential, set ambitious goals, and take charge of their future from day one.',
          curriculum: [
             'Leadership & Management Skills',
             'Team Building & Collaboration',
             'Effective Communication Strategies',
             'Problem Solving & Decision Making',
             'Change Management & Adaptability',
             'Performance Management & Coaching'
          ],
          duration: '3-6 months',
          level: 'All Levels'
       },
       'skill-development': {
          title: 'LeadHERS – Shaping Women Leaders at the Postgraduate Level',
          category: 'Technology & Innovation',
          lessons: '30',
          rating: '4.9',
          instructor: 'Michael Chen',
          // price: '$75',
          description: 'LeadHERS is a high-impact leadership and career acceleration program for postgraduate girl students, especially those pursuing management and professional degrees. Tailored to equip women with strategic thinking, leadership presence, and industry-ready skills, LeadHERS combines mentorship by women leaders, executive sessions, and hands-on projects. The program is a launchpad for aspiring professionals ready to lead with purpose and power in a dynamic world..',
          curriculum: [
             'Digital Transformation & Innovation',
             'Data Analytics & Business Intelligence',
             'Cloud Computing & DevOps',
             'Artificial Intelligence & Machine Learning',
             'Cybersecurity & Risk Management',
             'Agile Project Management'
          ],
          duration: '4-8 months',
          level: 'Intermediate to Advanced'
       },
       'pgcp': {
          title: 'Next-Gen Tech Leader - Empowering Technologists with the Language of Leadership',
          category: 'Specialized Education',
          lessons: '25',
          rating: '4.6',
          instructor: 'David Brown',
          // price: '$69',
          description: 'Next-Gen Tech Leader is a specialized program designed for postgraduate students in Science and Technology who aspire to move beyond technical roles and step confidently into leadership positions. Without the need for a full MBA, this program equips participants with essential management skills—including strategy, project leadership, innovation management, business communication, and decision-making.Through immersive learning, real-world case studies, and expert mentorship, Next-Gen Tech Leader transforms tech minds into agile, business-ready leaders prepared to drive innovation and growth in a rapidly evolving world..',
          curriculum: [
             'Specialized Field Studies',
             'Advanced Research Methods',
             'Professional Certification Preparation',
             'Industry Best Practices',
             'Specialized Skill Development',
             'Capstone Project'
          ],
          duration: '4-6 months',
          level: 'Intermediate to Advanced'
       },
       'sheleads': {
          title: 'SheLeads – Empowering Young Women at the Undergraduate Level',
          category: 'Women Leadership',
          lessons: '30',
          rating: '4.9',
          instructor: 'Lisa Anderson',
          // price: '$99',
          description: 'SheLeads is a unique program designed to empower young women at the undergraduate level. Through mentorship, leadership training, and networking opportunities, participants develop the confidence and skills needed to become future leaders. The program addresses the unique challenges women face in leadership roles and provides tools and strategies for success in various professional environments.',
          curriculum: [
             'Women Leadership Development',
             'Confidence Building & Self-Advocacy',
             'Networking & Relationship Building',
             'Career Planning for Women',
             'Breaking Gender Barriers',
             'Community Leadership & Impact'
          ],
          duration: '9 months',
          level: 'Beginner to Intermediate'
       },
       'advanced-leadership': {
          title: 'Post Graduate Certificate Programs - PGCP',
          category: 'Executive Leadership',
          lessons: '25',
          rating: '4.8',
          instructor: 'Emma Wilson',
          // price: '$89',
          description: 'Our Post Graduate Certificate Programs offer specialized knowledge in various fields, providing focused education for professionals who want to enhance their expertise in specific areas without committing to a full degree program. These programs are designed to provide deep, industry-relevant knowledge and practical skills that can be immediately applied in professional settings.',
          curriculum: [
             'Advanced Strategic Leadership',
             'Organizational Transformation',
             'Global Business Strategy',
             'Innovation & Change Management',
             'Executive Decision Making',
             'Strategic Communication & Influence'
          ],
          duration: '8 months',
          level: 'Advanced'
       }
    };

    const course = courses[courseId];
    
    if (!course) {
       console.error('Course not found:', courseId);
       return;
    }

    const modalContent = `
       <div class="course-details">
          <h4>${course.title}</h4>
          <div class="details-meta">
             <div class="row">
                <div class="col-md-6">
                   <p><strong>Category:</strong> ${course.category}</p>
                   <p><strong>Total Lessons:</strong> ${course.lessons}</p>
                   <p><strong>Duration:</strong> ${course.duration}</p>
                </div>
                <div class="col-md-6">
                   <p><strong>Rating:</strong> <i class="icon_star"></i> ${course.rating}</p>
                   <p><strong>Instructor:</strong> ${course.instructor}</p>
                   <p><strong>Level:</strong> ${course.level}</p>
                </div>
             </div>
             <div class="price-section mt-3">
                <h5 class="text-primary"><strong>Price: ${course.price}</strong></h5>
             </div>
          </div>
          <div class="course-description mt-4">
             <h5>Course Description</h5>
             <p>${course.description}</p>
          </div>
          <div class="course-curriculum mt-4">
             <h5>Course Curriculum Highlights</h5>
             <ul class="list-unstyled">
                ${course.curriculum.map(item => `<li><i class="far fa-check-circle text-success me-2"></i>${item}</li>`).join('')}
             </ul>
          </div>
          <div class="course-actions text-center">
             <button class="e-btn e-btn-blue" onclick="openApplicationForm()">
                <span>Apply Now</span>
             </button>
          </div>
       </div>
    `;
    
    document.querySelector('.course-details-content').innerHTML = modalContent;
 }