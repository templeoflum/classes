"""Original, silent-to-create audio material for screenshots; never auto-played."""
from pathlib import Path
import math
import struct
import wave

out = Path(__file__).with_name('Atlas pulse.wav')
rate = 44100
frames = []
for i in range(rate * 2):
    t = i / rate
    beat = t % 0.5
    envelope = math.exp(-beat * 24) * min(1, beat * 1500)
    sample = 0.32 * envelope * math.sin(2 * math.pi * 110 * beat)
    frames.append(struct.pack('<h', round(sample * 32767)))
with wave.open(str(out), 'wb') as f:
    f.setnchannels(1)
    f.setsampwidth(2)
    f.setframerate(rate)
    f.writeframes(b''.join(frames))
print(out)
