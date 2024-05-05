import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function Himg() {
  return (
    <Card
      isFooterBlurred
      radius="md"
      className="border-none"
    >
      <Image
        alt="Almera Journal"
        className="object-fill"
        src="https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=193369&inputFormat=png&cs=MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!eYRlcyLPc0uqx_sSvzZTyC4EVCiBidRNsLkgj25COA3NlG_KwgopRJwwRaqJWcOM%2Fitems%2F017I3SZYJOW4PVZK42WVD2PS3A6ERJSOUU%3Ftempauth%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJDb25zdW1lciBBcHA6IDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImFwcGlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL215Lm1pY3Jvc29mdHBlcnNvbmFsY29udGVudC5jb21AOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MDAwNjAwMDAxMjA4YWQ0OUBsaXZlLmNvbSIsImVuZHBvaW50dXJsIjoiRlJybFBnTzJtSjdHVWxhUDVDOFFHOWlVZEtOTmI5KzMwOXlDTFMrZUkwdz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE2NCIsImV4cCI6IjE3MTQ5NTM2MDAiLCJpcGFkZHIiOiIyMjMuMjMzLjY0LjE4MSIsImlzbG9vcGJhY2siOiJUcnVlIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTcxNDkzMjAwMCIsInB1aWQiOiIwMDA2MDAwMDEyMDhBRDQ5Iiwic2NwIjoiYWxsc2l0ZXMuZnVsbGNvbnRyb2wiLCJzaWQiOiIxMzkxMTIwOTEzMjE0NzkxMjM0OSIsInNpdGVpZCI6Ik56TTJOVGcwTnprdFkyWXlNaTAwWWpjekxXRmhZemN0Wm1JeE1tSm1NelkxTTJNNCIsInRpZCI6IjkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsInR0IjoiMiIsInVwbiI6Im11a3VscGFsMTA4QGhvdG1haWwuY29tIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiJ9.vZRZhundll95Tft4x3O-t3fJDWQ_GwqKuUJA2HcjbOg%26version%3DPublished&cb=63850530439&encodeFailures=1&width=1187&height=899"
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}
