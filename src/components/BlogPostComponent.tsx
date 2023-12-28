import { useEffect, useMemo, useState } from "react";
import { BlogPost } from "../BlogContent";
import { SiteSpacer, SiteText } from "../sdk/CommonComponents";

export const BlogPostComponent = (props: { blogPost: BlogPost }) => {
  const { blogPost } = props;
  const [shownChars, setShownChars] = useState(0);

  useEffect(() => {
    if (
      shownChars <
      blogPost.paragraphs.map((p) => p.length).reduce((a, b) => a + b, 0)
    )
      setTimeout(() => setShownChars((prev) => prev + 1), 1);
  }, [shownChars]);

  const buffers = useMemo(
    () =>
      blogPost.paragraphs.map((_p, i) =>
        blogPost.paragraphs
          .slice(0, i)
          .map((p) => p.length)
          .reduce((a, b) => a + b, 0)
      ),
    [blogPost.paragraphs]
  );

  return (
    <div>
      {blogPost.paragraphs.map((v, i) => (
        <>
          <SiteText
            key={i}
            indent
            value={v.slice(
              0,
              shownChars - buffers[i] > 0 ? shownChars - buffers[i] : 0
            )}
          />
          {shownChars > (buffers[i + 1] ?? Infinity) && <SiteSpacer />}
        </>
      ))}
    </div>
  );
};
