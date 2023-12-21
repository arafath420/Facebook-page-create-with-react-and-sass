import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <>
      <Helmet>
        <link
          rel="shortcut icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
          type="image/x-icon"
        />
        <title>{title}</title>
      </Helmet>
    </>
  );
};

export default Meta;
