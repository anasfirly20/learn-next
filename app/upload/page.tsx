"use client";

import { Button } from "@nextui-org/react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

type TCloudinaryResult = {
  public_id: string;
};

export default function UploadPage() {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="image" />
      )}
      <CldUploadWidget
        uploadPreset="oewsemct"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as TCloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <Button color="primary" onPress={() => open()}>
            Upload
          </Button>
        )}
      </CldUploadWidget>
    </>
  );
}
