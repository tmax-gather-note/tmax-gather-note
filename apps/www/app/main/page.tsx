"use client";

import { Button } from "@coss/ui/ui/button";
import { Card, CardPanel } from "@coss/ui/ui/card";
import { toastManager } from "@coss/ui/ui/toast";

export default function Page() {
  return (
    <main className="container mb-16 w-full flex-1 space-y-8 pt-8 lg:mb-20">
      {/* 섹션 1:  */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-bold font-heading text-3xl">
            제 1회 "가끔씩 가끔 보자"
          </h2>
          <p className="text-lg text-muted-foreground">
            귀한곳에 누추한 당신들을 초대합니다..
          </p>
        </div>
        <Card className="relative overflow-hidden p-0">
          <div className="relative h-[200px] w-full md:h-[500px] lg:h-[600px]">
            <img
              alt="이벤트 이미지"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </Card>
      </section>

      {/* 섹션 2: 행사 소개 문구 */}
      <section className="space-y-6">
        <Card className="mx-auto max-w-3xl">
          <CardPanel className="space-y-4 py-4 md:py-12">
            <div className="mx-auto max-w-2xl space-y-2 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                바쁜 일상 속에서 잠시 멈춰 서서
              </p>
              <p className="text-base md:text-lg">
                서로의 이야기를 나누고 싶은 마음으로
              </p>
              <p className="text-base md:text-lg">이 자리를 마련했습니다.</p>
              <p className="text-base md:text-lg">특별한 것은 없지만,</p>
              <p className="text-base md:text-lg">
                따뜻한 대화와 함께하는 시간이
              </p>
              <p className="text-base md:text-lg">
                여러분께 작은 위로가 되길 바랍니다.
              </p>
              <p className="text-base md:text-lg">
                가끔씩, 가끔 보자고 했던 약속처럼
              </p>
              <p className="mt-6 font-heading font-semibold text-foreground text-lg md:text-xl">
                귀한 곳에 누추한 당신들을 초대합니다.
              </p>
            </div>
          </CardPanel>
        </Card>
      </section>

      {/* 섹션 3: 타임테이블 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-bold font-heading text-3xl">일정</h2>
          <p className="text-lg text-muted-foreground">
            아래와 같이 준비했어요
          </p>
        </div>
        <Card className="mx-auto max-w-3xl">
          <CardPanel className="py-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-border border-b pb-4 last:border-0 last:pb-0">
                <div className="shrink-0 font-heading font-semibold text-foreground text-lg">
                  19:00
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold">개회 및 인사말</div>
                  <div className="text-muted-foreground text-sm">
                    행사 시작과 함께 환영 인사를 전합니다
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-border border-b pb-4 last:border-0 last:pb-0">
                <div className="shrink-0 font-heading font-semibold text-foreground text-lg">
                  19:30
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold">네트워킹 타임</div>
                  <div className="text-muted-foreground text-sm">
                    참석자들과 자유롭게 대화를 나누는 시간
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-border border-b pb-4 last:border-0 last:pb-0">
                <div className="shrink-0 font-heading font-semibold text-foreground text-lg">
                  20:00
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold">주요 프로그램</div>
                  <div className="text-muted-foreground text-sm">
                    특별한 시간을 함께합니다
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-border border-b pb-4 last:border-0 last:pb-0">
                <div className="shrink-0 font-heading font-semibold text-foreground text-lg">
                  21:00
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold">저녁 식사</div>
                  <div className="text-muted-foreground text-sm">
                    함께 식사를 즐기며 대화를 이어갑니다
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-border border-b pb-4 last:border-0 last:pb-0">
                <div className="shrink-0 font-heading font-semibold text-foreground text-lg">
                  22:00
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold">자유로운 시간</div>
                  <div className="text-muted-foreground text-sm">
                    편안하게 즐기는 자유로운 시간
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 font-heading font-semibold text-foreground text-lg">
                  23:00
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold">폐회</div>
                  <div className="text-muted-foreground text-sm">
                    행사를 마무리하며 다음을 기약합니다
                  </div>
                </div>
              </div>
            </div>
          </CardPanel>
        </Card>
      </section>

      {/* 섹션 4: 오시는 길 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-bold font-heading text-3xl">오시는 길</h2>
          <p className="text-lg text-muted-foreground">
            어떻게 오는지 모르실까봐 알려드려요!
          </p>
        </div>
        <Card className="overflow-hidden p-0">
          <div className="relative h-[400px] w-full md:h-[500px]">
            <iframe
              allowFullScreen
              className="h-full w-full border-0"
              src="https://map.kakao.com/link/map/행사장소,37.5665,126.9780"
              title="오시는 길"
            />
            <div className="absolute top-4 right-4 z-10">
              <a
                className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-border bg-white/90 px-3 py-1.5 font-medium text-sm shadow-xs backdrop-blur-sm transition-shadow hover:bg-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                href="https://map.kakao.com/link/map/행사장소,37.5665,126.9780"
                rel="noopener noreferrer"
                target="_blank"
              >
                카카오맵에서 보기
              </a>
            </div>
          </div>
          <CardPanel className="space-y-2 pb-6">
            <div className="font-semibold">주소</div>
            <div className="text-muted-foreground text-sm">
              서울특별시 중구 세종대로 110 (예시 주소)
            </div>
            <div className="pt-2">
              <div className="font-semibold">교통편</div>
              <div className="text-muted-foreground text-sm">
                지하철: 1호선 시청역 1번 출구 도보 5분
                <br />
                버스: 간선 100, 101, 102번 버스 정류장 하차
              </div>
            </div>
          </CardPanel>
        </Card>
      </section>

      {/* 섹션 5: 참여 여부 선택 섹션 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-bold font-heading text-3xl">참여 여부</h2>
          <p className="text-lg text-muted-foreground">함께 해주실거죠..?</p>
        </div>
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex flex-row justify-center gap-4">
              <Button
                className="h-24 flex-1 border-none"
                onClick={() => {
                  toastManager.add({
                    description: "기대하며 준비하겠습니다. 😊",
                    title: "함께 해주셔서 감사합니다!",
                    type: "success",
                  });
                }}
                size="xl"
                variant="default"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="font-bold text-xl">함께 할게요</span>
                </div>
              </Button>
              <Button
                className="h-24 flex-1 flex-col gap-2"
                onClick={() => {
                  toastManager.add({
                    description: "언제든지 환영합니다. 🙏",
                    title: "아쉽지만 다음 기회에 꼭 만나요!",
                    type: "info",
                  });
                }}
                size="xl"
                variant="outline"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="font-bold text-xl">다음에 만나요</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
