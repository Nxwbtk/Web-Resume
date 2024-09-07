"use client";

export const Topbar = () => {
  return (
    <div className="flex justify-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/">หน้าหลัก</a>
          </li>
          <li>
            <a href="/about">เกี่ยวกับ</a>
          </li>
          <li>
            <a href="/contact">ติดต่อ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
