export default function AboutSection() {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Cloud Services', level: 82 },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            テクノロジーとデザインの境界を越えて、ユーザーに価値を提供することを目指しています
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Creative Technologist
            </h3>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                10年以上にわたってWebテクノロジーの世界で活動し、
                フロントエンドからバックエンド、デザインまで幅広い領域で経験を積んできました。
              </p>
              
              <p>
                特に最近は、AI技術を活用したアプリケーション開発や、
                モダンなフレームワークを使った高速なWebサイト構築に注力しています。
              </p>
              
              <p>
                このブログでは、技術的な発見や学び、プロジェクトで得た知見を
                共有することで、コミュニティに貢献したいと考えています。
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">プロジェクト</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5年</div>
                <div className="text-sm text-gray-600">ブログ運営</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100K+</div>
                <div className="text-sm text-gray-600">月間PV</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications/Awards */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">認定・資格</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">AWS Certified Solutions Architect</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Google Cloud Professional</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Adobe Certified Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}