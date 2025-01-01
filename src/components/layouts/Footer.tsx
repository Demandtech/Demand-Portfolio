function Footer() {
  return (
    <div className="flex flex-col py-16">
      <p className="text-center text-xs lg:text-base text-neutral-500 font-inter font-medium">
        &copy; Rasheed Adekunle {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
