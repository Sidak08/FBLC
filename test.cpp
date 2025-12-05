#include <AccelStepper.h>
#include <Servo.h>

#define BASE_STEP_PIN 2
#define BASE_DIR_PIN 3
#define ARM_STEP_PIN 4
#define ARM_DIR_PIN 5

AccelStepper baseStepper(AccelStepper::DRIVER, BASE_STEP_PIN, BASE_DIR_PIN);
AccelStepper armStepper(AccelStepper::DRIVER, ARM_STEP_PIN, ARM_DIR_PIN);

#define NUM_SERVOS 4
int servoPins[NUM_SERVOS] = {6, 7, 8, 9};
Servo servos[NUM_SERVOS];
int servoAngle = 0;
int servoDirection = 1;

#define BUZZER_PIN 10

int melody[] = {262, 294, 330, 349, 392, 440, 494, 523};
int noteDurations[] = {4, 4, 4, 4, 4, 4, 4, 4};
int melodyLength = 8;
int currentNote = 0;
unsigned long lastNoteTime = 0;
unsigned long noteInterval = 400;

unsigned long lastServoMove = 0;
unsigned long servoInterval = 15;
unsigned long lastArmUpdate = 0;
unsigned long cycleTimer = 0;

void setup() {
  Serial.begin(9600);

  baseStepper.setMaxSpeed(400);
  baseStepper.setAcceleration(200);
  armStepper.setMaxSpeed(300);
  armStepper.setAcceleration(150);

  for (int i = 0; i < NUM_SERVOS; i++) {
    servos[i].attach(servoPins[i]);
  }

  pinMode(BUZZER_PIN, OUTPUT);
  Serial.println("Sledgehammer Ride Initialized!");
}

void loop() {
  unsigned long now = millis();

  baseStepper.moveTo(sin(now / 2000.0) * 1000);
  baseStepper.run();

  armStepper.moveTo(cos(now / 1500.0) * 800);
  armStepper.run();

  if (now - lastServoMove > servoInterval) {
    lastServoMove = now;
    servoAngle += servoDirection;
    if (servoAngle >= 180 || servoAngle <= 0) servoDirection *= -1;
    for (int i = 0; i < NUM_SERVOS; i++) {
      servos[i].write(servoAngle);
    }
  }

  if (now - lastNoteTime > noteInterval) {
    lastNoteTime = now;
    tone(BUZZER_PIN, melody[currentNote]);
    currentNote++;
    if (currentNote >= melodyLength) {
      currentNote = 0;
      noTone(BUZZER_PIN);
    }
  }

  if (now - cycleTimer > 5000) {
    cycleTimer = now;
    Serial.println("Cycle running...");
  }
}
