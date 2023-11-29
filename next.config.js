/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // 이 코드를 복붙해넣으면 됨
    return [
      {
        // :id는 param의 이름
        source: "/products/:id", // 리다이렉트 처리를 할 주소
        destination: "/items/:id", // 이동시킬 주소
        permanent: true, // response status 코드를 정함 (웹 브라우저에게 주소가 바뀌었다는 사실을 저장하게 하려면 true로 설정)
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com", // 도메인을 포함한 앞쪽에 있는 주소를 적어주면 됨
        port: "",
        pathname: "/codeitmall/**", // **를 쓰면 뒷쪽의 모든 경로를 포함하게 됨
      },
    ],
  },
};

module.exports = nextConfig;
