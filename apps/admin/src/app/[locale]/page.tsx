import { useTranslations } from "@sportycoon/locales";

export default function Root() {
  const t = useTranslations();

  console.log(t("login.title"));
  return (
    <div className="container flex flex-col gap-5">
      {/*<FormStepper*/}
      {/*  steps={[*/}
      {/*    {*/}
      {/*      title: "1",*/}
      {/*      description: "1",*/}
      {/*      renderComponent: <div>1</div>,*/}
      {/*    },*/}
      {/*    {*/}
      {/*      title: "2",*/}
      {/*      description: "2",*/}
      {/*      renderComponent: <div>2</div>,*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      <h1 className="font-montserrat text-red-700">Root</h1>
      {/*<h1 className="font-nico-moji text-red-700">Nico Moji</h1>*/}
      {/*<Button>fdfdf</Button>*/}
    </div>
  );
}
